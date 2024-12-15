from fastapi import APIRouter, Request
from app.services.ai_service import AIService

router = APIRouter()

@router.post("/chat/")
async def chat_endpoint(request: Request):
    try:
        input_context = await request.json()
        response = AIService.call_example_ai(input_context)

        return {
            "response_model": 'demo-model',
            "response_author": 'assistant',
            "response_content": response
        }
    
    except Exception as e:
        return {"error": str(e)}
