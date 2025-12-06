# Tasks: Unified Book + RAG Chatbot

**Input**: Design documents from `/specs/001-book-rag-chatbot/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Tests are included where appropriate to ensure functionality.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Web app**: `backend/src/`, `frontend/src/`

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure for both frontend and backend.

- [ ] T001 Create backend directory structure: `backend/src/models/`, `backend/src/services/`, `backend/src/api/`, `backend/tests/`
- [ ] T002 Create frontend directory structure: `frontend/src/components/`, `frontend/src/pages/`, `frontend/src/services/`, `frontend/tests/`
- [ ] T003 Initialize FastAPI project in `backend/`
- [ ] T004 Initialize Docusaurus project in `frontend/`
- [ ] T005 [P] Configure shared linting and formatting tools for both frontend and backend (e.g., Prettier, ESLint, Black, Flake8)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete.

- [ ] T006 Setup environment configuration management for backend (e.g., `.env` files, `pydantic-settings`) in `backend/`
- [ ] T007 Configure basic FastAPI application in `backend/src/main.py`
- [ ] T008 Implement basic error handling and logging infrastructure for backend in `backend/src/services/logging.py`
- [ ] T009 Integrate Neon Serverless Postgres client in `backend/src/services/database.py`
- [ ] T010 Integrate Qdrant Cloud client in `backend/src/services/vector_db.py`
- [ ] T011 Implement `better-auth` integration for backend in `backend/src/services/auth.py`

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel.

---

## Phase 3: User Story 1 - Read Technical Book (Priority: P1) 🎯 MVP

**Goal**: User can access and read the technical book content to learn about the subject matter.

**Independent Test**: Can be fully tested by navigating to various chapters and verifying that the content loads and is readable in the Docusaurus frontend.

### Implementation for User Story 1

- [ ] T012 [US1] Set up Docusaurus pages for initial book chapters in `frontend/docs/`
- [ ] T013 [US1] Configure Docusaurus sidebar and navigation in `frontend/docusaurus.config.js`
- [ ] T014 [US1] Create basic Docusaurus layout and theme customizations in `frontend/src/theme/`
- [ ] T015 [US1] Implement a mechanism to display book content (e.g., markdown rendering) in `frontend/src/components/BookContent.js`

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently.

---

## Phase 4: User Story 2 - Ask Chatbot Questions (Priority: P1)

**Goal**: User can ask questions about the book content and receive accurate, contextually relevant answers from an AI-powered RAG chatbot.

**Independent Test**: Can be fully tested by asking specific questions related to the book content via the chatbot interface and evaluating the chatbot's responses for accuracy and relevance.

### Implementation for User Story 2

- [ ] T016 [P] [US2] Create BookContent model in `backend/src/models/book_content.py`
- [ ] T017 [P] [US2] Create ChatbotQuery model in `backend/src/models/chatbot_query.py`
- [ ] T018 [P] [US2] Create ChatbotResponse model in `backend/src/models/chatbot_response.py`
- [ ] T019 [P] [US2] Implement `ContentIngestionService` to process and embed book content (using Qdrant) in `backend/src/services/content_ingestion.py`
- [ ] T020 [P] [US2] Implement `/ingest/chapter` API endpoint in `backend/src/api/ingestion.py` based on `contracts/ingestion.yaml`
- [ ] T021 [US2] Implement `ChatbotService` for RAG logic using OpenAI Agents/ChatKit SDK, Neon, and Qdrant in `backend/src/services/chatbot.py`
- [ ] T022 [US2] Implement `/chatbot/ask` API endpoint in `backend/src/api/chatbot.py` based on `contracts/chatbot.yaml`
- [ ] T023 [US2] Develop frontend chatbot UI component in `frontend/src/components/Chatbot.js`
- [ ] T024 [US2] Integrate chatbot UI with backend API in `frontend/src/services/chatbot.js`
- [ ] T025 [US2] Implement initial manual content ingestion using the `/ingest/chapter` API (e.g., a script or tool) in `backend/scripts/ingest_content.py`

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently.

---

## Phase 5: User Story 3 - Authenticated Access (Priority: P2)

**Goal**: User can sign up or log in to access personalized features of the book and chatbot.

**Independent Test**: Can be fully tested by successfully creating a new user account and subsequently logging in with those credentials.

### Implementation for User Story 3

- [ ] T026 [P] [US3] Create User model in `backend/src/models/user.py`
- [ ] T027 [US3] Implement `/auth/signup` API endpoint in `backend/src/api/auth.py` based on `contracts/auth.yaml`
- [ ] T028 [US3] Implement `/auth/login` API endpoint in `backend/src/api/auth.py` based on `contracts/auth.yaml`
- [ ] T029 [US3] Develop frontend signup UI component in `frontend/src/pages/Signup.js`
- [ ] T030 [US3] Develop frontend login UI component in `frontend/src/pages/Login.js`
- [ ] T031 [US3] Integrate signup/login UI with backend authentication API in `frontend/src/services/auth.js`
- [ ] T032 [US3] Implement client-side session management (e.g., token storage).

### Bonus: Personalization Features (Optional)

- [ ] T033 [P] [US3] Create PersonalizationSettings model in `backend/src/models/personalization_settings.py`
- [ ] T034 [US3] Implement `PersonalizationService` to manage user personalization data in `backend/src/services/personalization.py`
- [ ] T035 [US3] Implement `/personalization/{user_id}/chapter/{chapter_id}` GET API endpoint in `backend/src/api/personalization.py` based on `contracts/personalization.yaml`
- [ ] T036 [US3] Implement `/personalization/{user_id}/chapter/{chapter_id}` PUT API endpoint in `backend/src/api/personalization.py` based on `contracts/personalization.yaml`
- [ ] T037 [US3] Develop frontend UI components for highlighting and notes in `frontend/src/components/PersonalizationTools.js`
- [ ] T038 [US3] Integrate personalization UI with backend API in `frontend/src/services/personalization.js`

### Bonus: Translation Features (Optional)

- [ ] T039 [P] [US3] Create TranslationData model in `backend/src/models/translation_data.py`
- [ ] T040 [US3] Implement `TranslationService` to retrieve translated chapter content in `backend/src/services/translation.py`
- [ ] T041 [US3] Implement `/translation/chapter/{chapter_id}` GET API endpoint in `backend/src/api/translation.py` based on `contracts/translation.yaml`
- [ ] T042 [US3] Develop frontend UI for language selection and displaying translated content in `frontend/src/components/LanguageSelector.js`
- [ ] T043 [US3] Integrate translation UI with backend API in `frontend/src/services/translation.js`

**Checkpoint**: All user stories should now be independently functional.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories, deployment, and overall quality.

- [ ] T044 Configure CI/CD pipeline for Docusaurus deployment to GitHub Pages (`.github/workflows/deploy.yaml`)
- [ ] T045 Configure CI/CD pipeline for FastAPI backend deployment (e.g., to a cloud environment) (`.github/workflows/backend-deploy.yaml`)
- [ ] T046 Implement E2E tests for core user journeys (e.g., reading, chatbot interaction, login) using Playwright/Cypress in `frontend/tests/e2e/`
- [ ] T047 Perform security hardening for both frontend and backend (e.g., input validation, dependency scanning)
- [ ] T048 Update README.md with setup instructions, deployment guide, and feature overview
- [ ] T049 Review and refine logging and monitoring across the application (backend/frontend)
- [ ] T050 Conduct performance testing for critical API endpoints and frontend load times

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately.
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories.
- **User Stories (Phase 3+)**: All depend on Foundational phase completion.
  - User stories can then proceed in parallel (if staffed) or sequentially in priority order (P1 → P2 → P3).
- **Polish (Final Phase)**: Depends on all desired user stories being complete.

### User Story Dependencies

- **User Story 1 (P1 - Read Technical Book)**: Can start after Foundational (Phase 2) - No dependencies on other stories.
- **User Story 2 (P1 - Ask Chatbot Questions)**: Can start after Foundational (Phase 2) - No direct dependencies on other stories for its core functionality, but leverages Book Content from US1.
- **User Story 3 (P2 - Authenticated Access)**: Can start after Foundational (Phase 2) - Personalization and Translation features depend on authentication, but the core auth can be independent.

### Within Each User Story

- Models before services.
- Services before API endpoints.
- Frontend components before integration with backend services.
- Core implementation before bonus features.

### Parallel Opportunities

- All Setup tasks (T001-T005) marked [P] can run in parallel if they don't conflict with file creation.
- Foundational tasks (T006-T011) can have some parallel execution, especially external integrations.
- Once Foundational phase completes, User Story 1 (Read Technical Book) and User Story 2 (Ask Chatbot Questions) can largely be worked on in parallel.
- Within User Story 2, models (T016-T018) can be developed in parallel.
- Within User Story 3, the core authentication tasks can be done, and then personalization and translation components can be developed in parallel.

---

## Parallel Example: User Story 2

```bash
# Launch all models for User Story 2 together:
Task: "Create BookContent model in backend/src/models/book_content.py"
Task: "Create ChatbotQuery model in backend/src/models/chatbot_query.py"
Task: "Create ChatbotResponse model in backend/src/models/chatbot_response.py"

# Launch parallel API endpoint and ingestion service development:
Task: "Implement ContentIngestionService in backend/src/services/content_ingestion.py"
Task: "Implement /ingest/chapter API endpoint in backend/src/api/ingestion.py"
Task: "Implement /chatbot/ask API endpoint in backend/src/api/chatbot.py"
```

---

## Parallel Example: User Story 3 (Bonus Features)

```bash
# Develop personalization and translation features in parallel after core auth:
# Personalization tasks:
Task: "Create PersonalizationSettings model in backend/src/models/personalization_settings.py"
Task: "Implement PersonalizationService in backend/src/services/personalization.py"
Task: "Implement /personalization/{user_id}/chapter/{chapter_id} GET API endpoint in backend/src/api/personalization.py"
Task: "Implement /personalization/{user_id}/chapter/{chapter_id} PUT API endpoint in backend/src/api/personalization.py"

# Translation tasks:
Task: "Create TranslationData model in backend/src/models/translation_data.py"
Task: "Implement TranslationService in backend/src/services/translation.py"
Task: "Implement /translation/chapter/{chapter_id} GET API endpoint in backend/src/api/translation.py"
```

---

## Implementation Strategy

### MVP First (User Story 1 & 2 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1 (Read Technical Book)
4. Complete Phase 4: User Story 2 (Ask Chatbot Questions)
5. **STOP and VALIDATE**: Test User Stories 1 & 2 independently
6. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo
3. Add User Story 2 → Test independently → Deploy/Demo (MVP!)
4. Add User Story 3 (Core Auth) → Test independently → Deploy/Demo
5. Add Bonus Personalization → Test independently → Deploy/Demo
6. Add Bonus Translation → Test independently → Deploy/Demo
7. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1 (Frontend focus)
   - Developer B: User Story 2 (Backend/AI focus)
   - Developer C: User Story 3 (Authentication and potentially bonus features)
3. Stories complete and integrate independently.

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence
