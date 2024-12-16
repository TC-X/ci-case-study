![Ci Chatbot Case Study (Take-Home Assignment)](https://github.com/TC-X/ci-case-study/blob/main/frontend/public/readme-cover.png?raw=true)

# C[i] Chatbot Case Study (Take-Home Assignment)

**A demonstration of a simple chatbot application built to showcase frontend and backend integration, responsive UI, and conversational logic, based on the given assignment requirements.**

This project consists of:

1. **Frontend (React)**: A React-based user interface that displays a chat interface, handles user input, and integrates with the backend API.
2. **Backend (FastAPI)**: A Python-based FastAPI server providing a health check endpoint and a chat endpoint that returns predefined responses—no LLM integration, authentication, or persistent storage required.

**5-Day Roadmap**: I used a simple Notion Kanban board to break down tasks into actionable steps with clear due dates, helping me stay organized and meet the 5-day challenge. You can check out the [C[i] Chatbot Case Study – 5 days Roadmap Notion Page](https://www.notion.so/C-i-Chatbot-Case-Study-5-days-Roadmap-15c0a7d1869280dcbc9cce1cc7d7db73?pvs=4) to see how the plan was laid out.

---

## Features & Highlights

### Core Requirements (As Per Assignment)

- **Responsive Chat UI**: Implemented using Create React App, TypeScript, and TailwindCSS.
- **Message Input & Send Button**: Users can submit messages via a text input field and a send button.
- **Message History**: Displays both user messages and responses from the backend.
- **FastAPI Endpoints**:
  - **GET `/api/health`**: Health check endpoint.
  - **POST `/api/chat`**: Accepts a user message and returns a predefined response (no LLM integration).

### Additional Enhancements

- **Sidebar**: Use the sidebar to navigate between preset chat threads. While new thread creation isn't fully implemented due to time constraints, these preset threads store new messages and preserve conversation history (stored in the browser only).
- **Markdown Support**: Responses are rendered with markdown for richer formatting.
- **Preventive Logic & Loading Skeleton**: Provides user feedback while waiting for responses.
- **Local Storage Persistence (Frontend Only)**: Conversation histories are stored on the client side for convenience.

---

## Project Structure

### Frontend (React + TypeScript)

**Directory**: `frontend/`

**Key Technologies**:

- [Create React App](https://create-react-app.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- React Context & Hooks for state management and custom logic

**Frontend Directory Layout**:

```
src/
├── components/       # Reusable UI components (chat messages, input fields, layout)
├── context/          # React context providers (sidebar context, thread context)
├── hooks/            # Custom hooks for message handling and chat logic
├── mocks/            # Mock data for testing
├── pages/            # Top-level pages (Chat view, etc.)
├── services/         # API services for chat endpoints
├── types/            # TypeScript type definitions
├── App.tsx           # Root application component
└── index.tsx         # Entry point
```

### Backend (FastAPI)

**Directory**: `backend/`

**Key Technologies**:

- [FastAPI](https://fastapi.tiangolo.com/) for API development
- [Uvicorn](https://www.uvicorn.org/) as the ASGI server

**Backend Directory Layout**:

```
backend/
├── app/
│   ├── main.py               # FastAPI entry point
│   ├── api/
│   │   └── routes/
│   │       ├── health.py     # Health check endpoint (GET /api/health)
│   │       ├── chat.py       # Chat endpoint (POST /api/chat with predefined responses)
│   ├── services/
│   │   └── ai_service.py     # Mock service returning predefined responses
└── requirements.txt          # Python dependencies
```

No authentication, WebSockets, or persistent storage layers are implemented, as per the assignment guidelines.

---

## Data Model & Messaging Flow

### Messaging Mechanism

This application is designed around a simple conversation thread model. Threads contain messages from either the user or the system, allowing for a clear, organized context for each conversation.

#### Core Data Strucures (Types)

- **Thread**:

  - `threadId` (Primary Key): Unique identifier for the thread
  - `threadTitle`: A human-readable title for the thread

- **Message**:
  - `threadId` (Foreign Key): Associates the message with a specific thread
  - `messageId` (Primary Key): Unique identifier for the message within the thread
  - `messageModel`: Indicates the model used to generate the message (e.g., a selected LLM model)
  - `messageAuthor`: Indicates who authored the message (e.g., "user" or "assistant")
  - `messageContent`: The text content of the message
  - `messageTimestamp`: A timestamp for when the message was created or received

### Messaging Flow

1. **User Interaction**:  
   The user types a prompt into the chat input form and submits it.

2. **Immediate Feedback on the Frontend**:  
   As soon as the user submits the prompt, the `useSendMessage` hook adds a new user-authored message to the local state. This ensures that the UI updates instantly, showing the user’s message without waiting for a backend response.

3. **Preparing the Context**:  
   The system then gathers all messages associated with the current thread, extracting only essential fields (like `author` and `content`). This set of messages represents the conversation’s history and context.

4. **Backend Request**:  
   With the context ready, the frontend sends a request to the backend’s `POST /api/chat` endpoint. Although currently no true LLM integration is used, the request simulates sending the entire conversation context to a language model so it can generate a context-aware reply.

5. **Backend Response**:  
   The backend returns a predetermined or simulated response. The frontend processes this response, normalizing it into the predefined `Message` data structure. This step ensures that the new message aligns with the existing state structure.

6. **UI Update**:  
   Once the response message is integrated into the state, React re-renders the UI. The user now sees the backend-generated reply below their original prompt, maintaining a fluid and natural conversation flow.

---

## Installation & Setup

### Clone the Project

```bash
git clone git@github.com:TC-X/ci-case-study.git ci-case-study
cd ci-case-study
```

### Prerequisites

- **Node.js** and **npm** (for the frontend)
- **Python 3.9+** and **pip** (for the backend)
- **Virtual Environment** (recommended for Python dependencies)

### Backend Setup

1. **Navigate to the backend directory**:

   ```bash
   cd backend
   ```

2. **Create and activate a virtual environment**:

   ```bash
   python -m venv venv
   source venv/bin/activate       # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**:

   ```bash
   pip install -r requirements.txt
   ```

4. **Run the server**:

   ```bash
   uvicorn app.main:app --reload --port 5678
   ```

   The backend server should now be running at [http://localhost:5678](http://localhost:5678).

### Frontend Setup

1. **Navigate to the frontend directory**:

   ```bash
   cd frontend
   ```

2. **Install frontend dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm start
   ```

   The frontend is now running at [http://localhost:3000](http://localhost:3000).

### Connecting Frontend and Backend

By default, the frontend expects the backend at `http://localhost:5678/api/`. Adjust this in `frontend/services/chatService.ts` if your backend runs on a different port.

---

## Usage

- **Open the frontend** at [http://localhost:3000](http://localhost:3000).
- **Send Messages**: Type into the input field and click send or press enter.
- **View Multiple Threads**: Use the sidebar to switch between preset threads.
- **Markdown Formatting**: The backend responses can include basic markdown formatting.

---

## Troubleshooting

### Backend

1. **Is the backend running?**  
   Make sure the virtual environment is activated and `uvicorn` is running.

2. **Check the `port 5678`**  
   The frontend expects `http://localhost:5678`. Test with:
   ```bash
   curl -X POST "http://localhost:5678/api/chat/" -H "Content-Type: application/json" -d '{"message": "Hello World"}'
   ```
3. **CORS / 405 Errors**  
   Update `FRONTEND_URL` in `backend/app/main.py` to match your frontend’s origin.

### Frontend

1. **Backend Port Changes**  
   If not using `port 5678`, update `BACKEND_ENDPOINT` in `frontend/services/chatService.ts`.

If the issue persists, please don't hesitate to reach out:

- Phone: 306-881-4446
- Email: [tc.thitiwat@gmail.com](mailto:tc.thitiwat@gmail.com)

---

## Development Approach & Philosophy

Throughout the project, I focused on building a maintainable and scalable codebase by following these principles:

- **Reusable Components**: UI elements were split into smaller, reusable components to promote code reusability and easier future refactoring.
- **Clear File Structure**: I curated a directory and file structure that is not overly complicated, but is still easy to navigate, understand, and scale.
- **Consistent Naming Conventions**:
  - **PascalCase**: Components, Context, Types
  - **camelCase**: Functions, Variables, Hooks
  - **SCREAMING_SNAKE_CASE**: Constants
  - **snake_case**: Python backend modules and variables
- **Scoped State Management**: I preferred using scoped context providers for localized state management to prevent unnecessary re-renders and limit prop drilling to a maximum of two levels.
- **Minimal External Libraries**: Only essential libraries were integrated to maintain control over behavior and prevent complexity from external overrides.
- **Hooks Usage**: Hooks were introduced only where necessary and combined thoughtfully to keep the codebase clean and easy to maintain.
- **Styling**: Built desktop-first with TailwindCSS. The approach was to provide a flexible, user-centric UI inspired by familiar chat interfaces (like ChatGPT), while ensuring specificity in styling to avoid accidental overrides.

These guidelines helped create a codebase that is easy to navigate, extend, and maintain, while allowing for future growth as requirements evolve.

---

## Future Enhancements & Considerations

**Core Functionality**

- **LLM Integration:** Connect with a real language model.
- **Database Integration:** Store threads and messages in a real database for better scalability.
- **Thread Management:** Create, rename, and delete threads, moving beyond basic local storage.
- **Routing:** Use a router (e.g., React Router) for cleaner navigation between different views.
- **User Management:** User accounts, profiles and authentication.

**Enhancement Features**

- **Dynamic Components:** Return data in formats that can be displayed as special UI elements (e.g., charts).
- **Message Editing & Branching:** Allow users to revise previous messages and branch conversations.
- **File Uploads:** Enable sending attachments within chats.
- **Web Data Integration:** Incorporate real-time information from external sources to improve response quality.

---

## Development Notes

The commit history documents the incremental progress: setting up the frontend and backend, implementing the required features, adding enhancements, and refining the UI and logic. The primary aim was to meet the assignment requirements first, then add value within the short timeframe.
