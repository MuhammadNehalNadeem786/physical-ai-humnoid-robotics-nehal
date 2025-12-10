---
id: 0001
title: Update Constitution
stage: constitution
date: 2025-12-02
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: master
user: apple
command: /sp.constitution
labels: [constitution]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - .specify/memory/constitution.md
tests: []
---

## Prompt

Purpose & Scope

This project produces a unified technical book built with Docusaurus, enhanced with an AI-powered RAG chatbot capable of answering questions about book content. All development flows through Spec-Kit Plus and Claude Code, ensuring full transparency, reproducibility, and a version-controlled workflow. The scope covers book generation, backend development, AI integration, authentication, optional personalization, and translation features.

Core Tools & Technologies

Docusaurus — Documentation/book framework

Spec-Kit Plus — Specification-driven engineering workflow

Claude Code — AI-assisted implementation engine

OpenAI Agents / ChatKit SDK — Embedded chatbot runtime

FastAPI — Backend API service

Neon Serverless Postgres — Structured data store

Qdrant Cloud — Vector storage for embeddings

better-auth — Authentication layer

GitHub Pages — Deployment target for public hosting

Constraints & Requirements

All interactions and artifacts MUST be stored in specs/ following Spec-Kit conventions.

Hackathon scoring requires:

A complete Docusaurus book deployed live.

RAG chatbot fully functional.

Backend using FastAPI + Neon + Qdrant.

Ability to answer questions on selected book text.

Bonus scoring:
+50 – Reusable intelligence (subagents & skills)
+50 – Sign-up/Sign-in with better-auth
+50 – Per-chapter personalization
+50 – Per-chapter Urdu translation

Quality Standards

High modularity across frontend, backend, and AI layers

Strict reproducibility through Spec-Kit steps

Clean architecture (separation of concerns)

Portable and environment-independent development

Fully versioned artifacts with explicit ADRs

Success Criteria

Book loads correctly on GitHub Pages

Chatbot reliably answers contextual questions from book text

Vector search performance is accurate and fast

Authentication and user data logging function as required

Personalization and translation features work seamlessly

All work traceable end-to-end through Spec-Kit logs

## Response snapshot

Updated the project constitution, defining core principles, hackathon requirements, and success criteria.

## Outcome

- ✅ Impact: Initial constitution defined.
- 🧪 Tests: No tests run for constitution update.
- 📁 Files: .specify/memory/constitution.md updated.
- 🔁 Next prompts: None.
- 🧠 Reflection: Constitution successfully updated based on user input. All placeholders filled.

## Evaluation notes (flywheel)

- Failure modes observed: None.
- Graders run and results (PASS/FAIL): None.
- Prompt variant (if applicable): None.
- Next experiment (smallest change to try): None.
