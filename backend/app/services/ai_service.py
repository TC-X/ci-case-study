from app.mocks.responseData import random_response
class AIService:
    def call_example_ai(input_context: str) -> str:

        # similate return from AI model SDK
        return {
            "response_model": 'demo-model',
            "response_author": 'assistant',
            "response_content": random_response()
        }
    
    def call_openai_api(input_context: str) -> str:
        return "Future Use: OpenAI response"
    
    def call_claude_ai(input_context: str) -> str:
        return "Future Use: Claude AI response"
