from fastapi import FastAPI
from .controller import authentication_controller

app = FastAPI()


app.include_router(router=authentication_controller.router)






@app.get("/")
def read_root():
    return {"Hello": "World"}