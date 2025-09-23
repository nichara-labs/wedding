from typing import TYPE_CHECKING

import boto3

if TYPE_CHECKING:
    from mypy_boto3_dynamodb.service_resource import Table
    from mypy_boto3_sesv2 import SESV2Client


def get_ses_client(region: str) -> "SESV2Client":
    """Get an SESv2 client."""
    return boto3.client("sesv2", region_name=region)


def get_dynamodb_table(name: str) -> "Table":
    """Get a DynamoDB table resource."""
    dynamodb_resource = boto3.resource("dynamodb")
    return dynamodb_resource.Table(name)
