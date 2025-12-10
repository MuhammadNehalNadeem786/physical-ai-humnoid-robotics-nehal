<!-- Sync Impact Report:
Version change: 0.0.0 -> 1.0.0
Modified principles: None (initial population)
Added sections: Core Principles, Hackathon Requirements, Success Criteria, Governance
Removed sections: None
Templates requiring updates:
- .specify/templates/plan-template.md: ✅ updated
- .specify/templates/spec-template.md: ✅ updated
- .specify/templates/tasks-template.md: ✅ updated
- .specify/templates/commands/*.md: ✅ updated
Follow-up TODOs: None
-->
# Docusaurus RAG Chatbot Technical Book Constitution

## Core Principles

### I. High Modularity
High modularity across frontend, backend, and AI layers.

### II. Strict Reproducibility
Strict reproducibility through Spec-Kit steps.

### III. Clean Architecture
Clean architecture (separation of concerns).

### IV. Portable & Environment-Independent
Portable and environment-independent development.

### V. Fully Versioned Artifacts
Fully versioned artifacts with explicit ADRs.

### VI. Spec-Kit Conventions
All interactions and artifacts MUST be stored in specs/ following Spec-Kit conventions.

## Hackathon Requirements

Hackathon scoring requires:
- A complete Docusaurus book deployed live.
- RAG chatbot fully functional.
- Backend using FastAPI + Neon + Qdrant.
- Ability to answer questions on selected book text.

Bonus scoring:
- +50 – Reusable intelligence (subagents & skills)
- +50 – Sign-up/Sign-in with better-auth
- +50 – Per-chapter personalization
- +50 – Per-chapter Urdu translation

## Success Criteria

- Book loads correctly on GitHub Pages
- Chatbot reliably answers contextual questions from book text
- Vector search performance is accurate and fast
- Authentication and user data logging function as required
- Personalization and translation features work seamlessly
- All work traceable end-to-end through Spec-Kit logs

## Governance
This constitution supersedes all other practices. Amendments require documentation, approval, and a migration plan. All work is traceable end-to-end through Spec-Kit logs.

**Version**: 1.0.0 | **Ratified**: 2025-12-02 | **Last Amended**: 2025-12-02
