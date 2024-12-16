from fastapi import APIRouter, Request
from app.services.ai_service import AIService

router = APIRouter()

@router.post("/chat/")
async def chat_endpoint(request: Request):
    try:
        input_context = await request.json() # input context from frontend (header body)

        # in real application, we could route the input context to the appropriate AI model here
        response = AIService.call_example_ai(input_context) # use example AI model for now

        return response
    
    except Exception as e:
        return {"error": str(e)}
