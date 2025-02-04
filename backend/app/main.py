import uvicorn
from fastapi import FastAPI
from app.api.routes import health, chat
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS settings
FRONTEND_URL = "http://localhost:3000"
origins = FRONTEND_URL

app.add_middleware(
    CORSMiddleware,
    allow_origins=FRONTEND_URL,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# route routers
app.include_router(health.router, prefix='/api')
app.include_router(chat.router, prefix='/api')

# run the server with uvicorn (default port 5678)
if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=5678)