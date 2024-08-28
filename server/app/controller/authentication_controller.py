from fastapi import APIRouter, Response, Request, HTTPException
from app.service.authentication_service import AuthenticationService
from app.schema.authentication_schema import LoginUser

router = APIRouter()

router.post("/login", status_code=201)
async def login(user: LoginUser, response: Response):
    result = AuthenticationService.login(user.email, user.password)
    if result:
        response.set_cookie(
            key="access_token", value=result["access_token"], httponly=True  # type: ignore
        )
        response.set_cookie(
            key="refresh_token", value=result["refresh_token"], httponly=True  # type: ignore
        )
        return {"message": "Login is successful."}
    else:
        raise HTTPException(status_code=500, detail="Server error!")