from fastapi import APIRouter, Response, Request, HTTPException
from app.service.authentication_service import AuthenticationService
from app.schema.authentication_schema import LoginUser

router = APIRouter()
auth_service = AuthenticationService()

@router.post("/login")
async def login(user: LoginUser, response: Response):
        result = auth_service.login(email=user.email, password=user.password)

        response.set_cookie(
            key="access_token", value=result["access_token"], httponly=True
        )
        response.set_cookie(
            key="refresh_token", value=result["refresh_token"], httponly=True
        )
        return {"message": "Login is successful."}

