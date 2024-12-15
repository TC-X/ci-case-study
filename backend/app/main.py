from fastapi import FastAPI
from app.api.routes import health, chat
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS settings
origins = ["http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Frontend origin
    allow_credentials=True,
    allow_methods=["*"],  # Allows all HTTP methods
    allow_headers=["*"],  # Allows all headers
)

# route routers
app.include_router(health.router, prefix='/api')
app.include_router(chat.router, prefix='/api')