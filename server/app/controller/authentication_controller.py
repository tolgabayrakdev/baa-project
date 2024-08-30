from fastapi import APIRouter, Response, Request, HTTPException
from app.service.authentication_service import AuthenticationService
from app.schema.authentication_schema import LoginUser, RegisterUser

router = APIRouter()

@router.post("/login")
async def login(user: LoginUser, response: Response):
        result = AuthenticationService.login(email=user.email, password=user.password)

        response.set_cookie(
            key="access_token", value=result["access_token"], httponly=True
        )
        response.set_cookie(
            key="refresh_token", value=result["refresh_token"], httponly=True
        )
        return {"message": "Login is successful."}


@router.post("/register", status_code=201)
async def register(user: RegisterUser):
    return AuthenticationService.register(payload=user)

@router.post("/logout")
async def logout(response: Response) -> dict[str, str]:
    response.delete_cookie("access_token")
    response.delete_cookie("refresh_token")
    return {"message": "you are logged out."}