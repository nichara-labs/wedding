import logging
from datetime import UTC, datetime

from fastapi import APIRouter, HTTPException, status

from wedding.constants import (
    EMAIL_HTML,
    GUEST_ICS,
    REGION,
    RELATIVE_ICS,
    SES_SENDER_EMAIL,
    TABLE_NAME,
)
from wedding.models import RsvpItem, RSVPRequest, RSVPResponse
from wedding.util import get_dynamodb_table, get_ses_client

_log = logging.getLogger(__name__)

router = APIRouter()


@router.post("/rsvp")
def submit_rsvp(payload: RSVPRequest) -> RSVPResponse:
    """Submit an RSVP and send a thank-you email."""
    table = get_dynamodb_table(name=TABLE_NAME)
    try:
        table.put_item(
            Item=RsvpItem(
                email=payload.email,
                name=payload.name,
                is_relative=payload.is_relative,
                notes=payload.notes,
                created_at=datetime.now(UTC),
                is_attending=payload.is_attending,
                side=payload.side,
            ).model_dump(mode="json")
        )
    except Exception as e:
        _log.exception("Failed to persist RSVP to DynamoDB")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to record your RSVP. Please contact us directly at {SES_SENDER_EMAIL}.",
        ) from e

    try:
        _send_email(payload)
    except Exception as e:
        _log.exception("Failed to send thank-you email")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"We received your RSVP, but failed to send a thank-you email. Please contact us directly at {SES_SENDER_EMAIL}.",
        ) from e

    return RSVPResponse(
        message="RSVP received. We've also sent you a confirmation email. Thank you!"
    )


def _send_email(payload: RSVPRequest) -> None:
    client = get_ses_client(region=REGION)
    subject = "Thank you for your RSVP!"
    base_email_kwargs = {
        "FromEmailAddress": f"Chanel & Nicholas <{SES_SENDER_EMAIL}>",
        "Destination": {
            "ToAddresses": [payload.email],
            "BccAddresses": [SES_SENDER_EMAIL],
        },
    }

    if not payload.is_attending:
        text_body = (
            f"Hi {payload.name},\n\n"
            "Thank you for letting us know you won't be able to join us. "
            "We're grateful you took the time to reply and will be thinking of you.\n\n"
            "With love,\nChanel & Nicholas"
        )
        client.send_email(
            Content={
                "Simple": {
                    "Subject": {"Data": subject},
                    "Body": {"Text": {"Data": text_body}},
                }
            },
            **base_email_kwargs,
        )
        return

    text_body = (
        f"Hi {payload.name},\n\n"
        "Thank you for your RSVP. We can't wait to celebrate with you!\n\n"
        "With love,\nChanel & Nicholas"
    )
    html_body = EMAIL_HTML.read_text().format(name=payload.name)

    client.send_email(
        Content={
            "Simple": {
                "Subject": {"Data": subject},
                "Body": {
                    "Text": {"Data": text_body},
                    "Html": {"Data": html_body},
                },
                "Attachments": [
                    {
                        "FileName": "invitation.ics",
                        "RawContent": (
                            GUEST_ICS.read_text()
                            if not payload.is_relative
                            else RELATIVE_ICS.read_text()
                        ),
                        "ContentType": "text/calendar",
                    }
                ],
            }
        },
        **base_email_kwargs,
    )
