from fastapi import APIRouter

router = APIRouter()

router.post("/login", status_code=201)
def login():
    return "a"