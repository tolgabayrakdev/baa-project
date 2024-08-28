from ..database import SessionLocal
from fastapi import HTTPException
from ..model import User
from app.util.helper import Helper

db = SessionLocal()


class AuthenticationService:

    @staticmethod
    def login(email: str, password: str) -> HTTPException | dict[str, str]:
        user = db.query(User).filter_by(email=email).first()
        if user is None or not Helper.match_hash_text(str(user.password), password):
            raise HTTPException(status_code=400, detail="Email or password wrong!")
        access_token = Helper.generate_access_token({"user_id": user.id})
        refresh_token = Helper.generate_refresh_token({"user_id": user.id})
        return {"access_token": access_token, "refresh_token": refresh_token}
