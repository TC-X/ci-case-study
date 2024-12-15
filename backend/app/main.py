from fastapi import FastAPI
from app.api.routes import health

app = FastAPI()

# route routers
app.include_router(health.router, prefix='/api')