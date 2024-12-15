class AIService:
    def call_example_ai(input_context: str) -> str:
        return input_context + " AI response!"
    
    def call_openai_api(input_context: str) -> str:
        return "OpenAI response!"
    
    def call_claude_ai(input_context: str) -> str:
        return "Claude AI response!"