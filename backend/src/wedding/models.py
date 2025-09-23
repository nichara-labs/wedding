from datetime import datetime

from pydantic import BaseModel, EmailStr


class RSVPRequest(BaseModel):
    email: EmailStr
    name: str
    is_relative: bool
    notes: str


class RSVPResponse(BaseModel):
    message: str


class RsvpItem(BaseModel):
    email: EmailStr
    name: str
    is_relative: bool
    notes: str
    created_at: datetime
