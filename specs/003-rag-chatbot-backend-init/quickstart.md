# Quickstart: Initialize RAG Chatbot Backend

This guide provides a quick overview of how to set up and run the FastAPI backend for the RAG Chatbot.

## Prerequisites

- Python 3.11
- pip (Python package installer)

## Setup and Run

1.  **Navigate to the backend directory**:
    ```bash
    cd backend
    ```

2.  **Create a virtual environment (recommended)**:
    ```bash
    python3.11 -m venv .venv
    source .venv/bin/activate
    ```

3.  **Install dependencies**:
    ```bash
    pip install "fastapi[standard]" openai-agents python-dotenv qdrant-client uvicorn
    ```

4.  **Create a `.env` file** in the `backend/` directory with your environment variables:
    ```
    GEMINI_API_KEY="your_gemini_api_key"
    QDRANT_API_KEY="your_qdrant_api_key"
    QDRANT_URL="your_qdrant_url"
    DATABASE_URL="your_database_connection_string"
    ```
    Replace the placeholder values with your actual keys and URLs.

5.  **Start the development server with auto-reload**:
    ```bash
    uvicorn src.main:app --reload
    ```

    The FastAPI application will be accessible (usually at `http://127.0.0.1:8000`).

## Basic Project Structure

The backend follows this basic structure:

```text
backend/
├── src/
│   ├── models/
│   ├── services/
│   └── api/
└── tests/
```
