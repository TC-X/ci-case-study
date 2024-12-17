from fastapi import APIRouter, Request, HTTPException
from app.services.ai_service import AIService
from pydantic import BaseModel
from typing import List, Any

router = APIRouter()

# type safety for input context
class Message(BaseModel):
    author: str
    content: str

@router.post("/chat/")
async def chat_endpoint(input_context: List[Message]):

    # Endpoint to handle chat input from frontend
    # pass in a list of messages with author and content [{auther: "user", content: "hello"}, ...]
    # returns a response object containing the model, author, and content
    try:
        # Validate input_context is not empty
        if not input_context:
            raise HTTPException(status_code=400, detail="Input context cannot be empty")

        # Log input context
        print("Received input context:", input_context)

        # Process input context using the AI service
        response = AIService.call_example_ai(input_context)

        return response

    except HTTPException:
        raise  # raise HTTPExceptions and return status code and messages
    except Exception as e:
        # catch exception and return 500 error
        raise HTTPException(status_code=500, detail=f"Internal server error: {str(e)}")