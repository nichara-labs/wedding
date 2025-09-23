from fastapi import FastAPI, HTTPException
from fastapi.exceptions import RequestValidationError
from starlette.middleware.cors import CORSMiddleware

from wedding.handlers import http_exception_handler, validation_exception_handler
from wedding.routes import responses, rsvp

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://chanelandnicholas.com", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(rsvp.router)
app.include_router(responses.router)
app.exception_handler(HTTPException)(http_exception_handler)
app.exception_handler(RequestValidationError)(validation_exception_handler)
