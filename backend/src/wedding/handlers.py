from fastapi import HTTPException, Request, Response
from fastapi.exception_handlers import (
    http_exception_handler as fastapi_http_exception_handler,
)
from fastapi.exception_handlers import (
    request_validation_exception_handler as fastapi_validation_exception_handler,
)
from fastapi.exceptions import RequestValidationError


def _ensure_cors_headers(response: Response, origin: str | None) -> None:
    if origin:
        response.headers["Access-Control-Allow-Origin"] = origin
        vary = response.headers.get("Vary")
        if vary:
            if "Origin" not in {item.strip() for item in vary.split(",")}:
                response.headers["Vary"] = f"{vary}, Origin"
        else:
            response.headers["Vary"] = "Origin"
    else:
        response.headers.setdefault("Access-Control-Allow-Origin", "*")

    response.headers.setdefault("Access-Control-Allow-Credentials", "true")
    response.headers.setdefault(
        "Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS"
    )
    response.headers.setdefault("Access-Control-Allow-Headers", "*")


async def http_exception_handler(request: Request, exc: HTTPException) -> Response:
    """Return a CORS-enabled response for HTTP exceptions."""
    response = await fastapi_http_exception_handler(request, exc)
    _ensure_cors_headers(response, request.headers.get("origin"))
    return response


async def validation_exception_handler(
    request: Request, exc: RequestValidationError
) -> Response:
    """Return a CORS-enabled response for validation errors."""
    response = await fastapi_validation_exception_handler(request, exc)
    _ensure_cors_headers(response, request.headers.get("origin"))
    return response
