import os
from pathlib import Path

from dotenv import load_dotenv

load_dotenv(Path(__file__).parent.parent.parent / ".env")

REGION = "ap-southeast-1"
TABLE_NAME = "wedding"
SENDER_EMAIL = "us@chanelandnicholas.com"
EMAIL_HTML = Path(__file__).parent.parent.parent / "email.html"
GUEST_ICS = Path(__file__).parent.parent.parent / "guest.ics"
RELATIVE_ICS = Path(__file__).parent.parent.parent / "relative.ics"

PASSWORD = os.environ["PASSWORD"]
FE_API_KEY = os.environ["FE_API_KEY"]
