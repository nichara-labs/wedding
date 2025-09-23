import logging
from typing import Annotated

from fastapi import APIRouter, Header, HTTPException, status

from wedding.constants import PASSWORD, TABLE_NAME
from wedding.models import RsvpItem
from wedding.util import get_dynamodb_table

_log = logging.getLogger(__name__)
router = APIRouter()


@router.get("/responses")
def get_responses(
    authorization: Annotated[str | None, Header()] = None,
) -> list[RsvpItem]:
    """Get all RSVP responses."""
    provided_password = None
    if authorization:
        scheme, _, credentials = authorization.partition(" ")
        provided_password = (
            credentials if scheme.lower() == "bearer" and credentials else authorization
        )
    if provided_password != PASSWORD:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Unauthorized",
            headers={"WWW-Authenticate": "Bearer"},
        )

    table = get_dynamodb_table(name=TABLE_NAME)
    try:
        response = table.scan()
        items = response.get("Items", [])
        return [RsvpItem.model_validate(item) for item in items]
    except Exception as e:
        _log.exception("Failed to fetch RSVP responses from DynamoDB")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch RSVP responses.",
        ) from e
