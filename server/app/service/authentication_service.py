from ..database import SessionLocal
from fastapi import HTTPException
from ..model import User
from app.util.helper import Helper


class AuthenticationService:

    def __init__(self):
        self.helper = Helper()

    def login(self, email: str, password: str) -> dict[str, str]:
        db = SessionLocal()
        try:
            user = db.query(User).filter_by(email=email).first()
            if user is None or not self.helper.match_hash_text(str(user.password), password):
                raise HTTPException(status_code=400, detail="Email or password wrong!")
            access_token = self.helper.generate_access_token({"user_id": user.id})
            refresh_token = self.helper.generate_refresh_token({"user_id": user.id})
            return {"access_token": access_token, "refresh_token": refresh_token}
        except Exception:
            raise HTTPException(status_code=500, detail="An unexpected server error occurred.")
        finally:
            db.close()
