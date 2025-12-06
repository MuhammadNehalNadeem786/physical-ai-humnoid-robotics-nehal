# Data Model: Initialize RAG Chatbot Backend

This document outlines the key entities and their attributes for the "Initialize RAG Chatbot Backend" feature.

## Entities

### Environment Configuration
- **Description**: Represents the collection of environment variables required for the backend application.
- **Attributes**:
    - `GEMINI_API_KEY`: API key for Gemini services.
    - `QDRANT_API_KEY`: API key for Qdrant Cloud.
    - `QDRANT_URL`: URL for the Qdrant Cloud instance.
    - `DATABASE_URL`: Connection string for the Neon Serverless Postgres database.
    - Other environment variables as needed (e.g., Uvicorn host/port).
