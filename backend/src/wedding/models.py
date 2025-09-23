from datetime import datetime
from typing import Literal

from pydantic import BaseModel, EmailStr


class RSVPRequest(BaseModel):
    email: EmailStr
    name: str
    is_relative: bool
    notes: str
    is_attending: bool
    side: Literal["bride", "groom"]


class RSVPResponse(BaseModel):
    message: str


class RsvpItem(RSVPRequest):
    created_at: datetime
