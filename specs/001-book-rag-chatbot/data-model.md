# Data Model: Unified Book + RAG Chatbot

This document outlines the key entities and their attributes for the Unified Book + RAG Chatbot project.

## Entities

### Book Content
- **Description**: Represents the individual chapters, sections, and overall text of the technical book.
- **Attributes**:
    - `id`: Unique identifier for a piece of content (e.g., chapter ID, section ID).
    - `title`: Title of the chapter or section.
    - `content`: Markdown or HTML content of the text.
    - `embedding`: Vector representation of the content for RAG (stored in Qdrant).
- **Relationships**: One-to-many with `Translation Data` (one chapter can have many translations).

### User
- **Description**: An authenticated individual who can interact with the book and chatbot, and can modify their own personalization settings.
- **Attributes**:
    - `id`: Unique user identifier (from `better-auth`).
    - `username`: User's chosen username.
    - `email`: User's email address.
    - `roles`: User roles (e.g., authenticated, admin - though currently only self-modification of personalization is allowed).
- **Relationships**: One-to-one with `Personalization Settings`.

### Chatbot Query
- **Description**: The text input provided by the user to the RAG chatbot.
- **Attributes**:
    - `id`: Unique query identifier.
    - `user_id`: ID of the user who made the query.
    - `query_text`: The actual question text.
    - `timestamp`: Time when the query was made.
- **Relationships**: Many-to-one with `User`.

### Chatbot Response
- **Description**: The generated answer from the RAG chatbot, derived from book content in response to a query.
- **Attributes**:
    - `id`: Unique response identifier.
    - `query_id`: ID of the query this response is for.
    - `response_text`: The chatbot's answer.
    - `source_content_ids`: References to `Book Content` IDs used to generate the response.
    - `timestamp`: Time when the response was generated.
- **Relationships**: One-to-one with `Chatbot Query`, many-to-many with `Book Content`.

### Personalization Settings
- **Description**: User-specific configurations including highlights, notes, and reading progress.
- **Attributes**:
    - `user_id`: Foreign key to `User`.
    - `chapter_id`: Foreign key to `Book Content` (for chapter-specific settings).
    - `highlights`: Array of text ranges or IDs for highlighted sections.
    - `notes`: Array of user-generated notes, potentially linked to `Book Content` sections.
    - `reading_progress`: Current reading position within a chapter.
- **Relationships**: One-to-one with `User`, many-to-one with `Book Content`.

### Translation Data
- **Description**: Per-chapter translated content.
- **Attributes**:
    - `original_chapter_id`: Foreign key to `Book Content` (original chapter).
    - `language`: Language code (e.g., 'ur' for Urdu).
    - `translated_content`: The full translated chapter content.
- **Relationships**: Many-to-one with `Book Content`.
