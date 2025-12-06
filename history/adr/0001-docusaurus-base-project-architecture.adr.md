ADR-0001: Docusaurus Base Project Architecture

> **Scope**: Document decision clusters, not individual technology choices. Group related decisions that work together (e.g., "Frontend Stack" not separate ADRs for framework, styling, deployment).

- **Status:** Accepted
- **Date:** 2025-12-02
- **Feature:** Unified Book + RAG Chatbot
- **Context:** The project requires a unified technical book, an AI-powered RAG chatbot, user authentication, and optional personalization/translation features. A key architectural decision involves structuring the project to support both a static frontend and a dynamic backend, leveraging distinct technology stacks while maintaining modularity and reproducibility.

<!-- Significance checklist (ALL must be true to justify this ADR)
     1) Impact: Long-term consequence for architecture/platform/security?
     2) Alternatives: Multiple viable options considered with tradeoffs?
     3) Scope: Cross-cutting concern (not an isolated detail)?
     If any are false, prefer capturing as a PHR note instead of an ADR. -->

## Decision

The project will adopt a decoupled architecture consisting of a Docusaurus-based frontend for the technical book and a FastAPI-based backend for the RAG chatbot, authentication, and other dynamic services. This structure promotes clear separation of concerns, allows independent development and deployment, and leverages the strengths of each technology.

**Frontend Stack (Docusaurus)**:
- **Framework**: Docusaurus for static site generation and documentation.
- **Deployment**: GitHub Pages for public hosting.

**Backend Stack (FastAPI)**:
- **Framework**: FastAPI for API services.
- **Structured Data Store**: Neon Serverless Postgres.
- **Vector Store**: Qdrant Cloud for embeddings.
- **Authentication**: `better-auth` layer.
- **AI Integration**: OpenAI Agents / ChatKit SDK.

## Consequences

### Positive

- **Modularity**: Frontend and backend can evolve independently, reducing tight coupling.
- **Scalability**: Each component can be scaled independently based on its specific needs.
- **Reproducibility**: Spec-Kit Plus ensures a version-controlled and transparent workflow across both components.
- **Technology Best Fit**: Leverages Docusaurus for documentation and FastAPI for high-performance APIs.
- **Clear Ownership**: Easier to assign development responsibilities to frontend or backend specialists.

### Negative

- **Increased Setup Complexity**: Initial project setup involves configuring two distinct environments and deployment pipelines.
- **Communication Overhead**: Requires careful definition and management of API contracts between frontend and backend.
- **Potential for Duplication**: Some configuration or build steps might have to be managed separately for frontend and backend.

## Alternatives Considered

**Monolithic Application**: A single application combining both the static book content generation and dynamic backend services (e.g., a single Python web framework handling both). This was rejected due to:
- **Reduced Modularity**: Tighter coupling between content and services.
- **Less Scalability**: Scaling one part would necessitate scaling the entire application.
- **Suboptimal Technology Fit**: A single framework would struggle to optimally serve both static content generation (Docusaurus excels here) and high-performance API services (FastAPI excels here).

## References

- Feature Spec: /Users/apple/Desktop/New/my-specs/specs/001-book-rag-chatbot/spec.md
- Implementation Plan: /Users/apple/Desktop/New/my-specs/specs/001-book-rag-chatbot/plan.md
- Related ADRs: None
- Evaluator Evidence: N/A
