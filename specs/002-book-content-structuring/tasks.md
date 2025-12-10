# Tasks: Book Content Structuring and Chapter Division

**Input**: Design documents from `/specs/002-book-content-structuring/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/, quickstart.md

**Tests**: Not explicitly requested in the feature specification for this feature.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Web app**: `backend/src/`, `frontend/src/` (Docusaurus specific: `frontend/docs/` for content, `frontend/docusaurus.config.js` for configuration)

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Configure Docusaurus for content display.

- [ ] T001 Configure `frontend/docusaurus.config.js` to define the main sidebar for the "Physical AI" book.
- [ ] T002 Configure `frontend/docusaurus.config.js` for navigation to the "Physical AI & Humanoid Robotics" book.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: No specific foundational tasks unique to this feature, as it primarily leverages Docusaurus's existing capabilities for static content.

---

## Phase 3: User Story 1 - Read Chaptered Book Content (Priority: P1) 🎯 MVP

**Goal**: Learners can access and read the "Physical AI & Humanoid Robotics" course content, divided into clear, easy-to-understand chapters.

**Independent Test**: A learner can navigate to the book's main page, select any chapter, and read its content.

### Implementation for User Story 1

- [ ] T003 [P] [US1] Create `frontend/docs/physical-ai/intro.mdx` with the "Physical AI & Humanoid Robotics" overview and Quarter Overview.
- [ ] T004 [P] [US1] Create `frontend/docs/physical-ai/module1-ros2.mdx` with content for Module 1: The Robotic Nervous System (ROS 2).
- [ ] T005 [P] [US1] Create `frontend/docs/physical-ai/module2-digital-twin.mdx` with content for Module 2: The Digital Twin (Gazebo & Unity).
- [ ] T006 [P] [US1] Create `frontend/docs/physical-ai/module3-ai-robot-brain.mdx` with content for Module 3: The AI-Robot Brain (NVIDIA Isaac™).
- [ ] T007 [P] [US1] Create `frontend/docs/physical-ai/module4-vla.mdx` with content for Module 4: Vision-Language-Action (VLA).
- [ ] T008 [US1] Update `frontend/docusaurus.config.js` to include the sidebar items for `frontend/docs/physical-ai/` content.

---

## Phase 4: User Story 2 - Understand Course Overview and Modules (Priority: P1)

**Goal**: Learners can quickly grasp the overall structure, theme, goal, and individual modules of the course.

**Independent Test**: A learner can access the course overview page and understand the main theme, goal, and the focus of each module.

### Implementation for User Story 2

- [ ] T009 [US2] Review and refine the "Quarter Overview" content in `frontend/docs/physical-ai/intro.mdx` for clarity.
- [ ] T010 [P] [US2] Review and refine Module 1 content in `frontend/docs/physical-ai/module1-ros2.mdx` for clarity and pedagogical effectiveness.
- [ ] T011 [P] [US2] Review and refine Module 2 content in `frontend/docs/physical-ai/module2-digital-twin.mdx` for clarity and pedagogical effectiveness.
- [ ] T012 [P] [US2] Review and refine Module 3 content in `frontend/docs/physical-ai/module3-ai-robot-brain.mdx` for clarity and pedagogical effectiveness.
- [ ] T013 [P] [US2] Review and refine Module 4 content in `frontend/docs/physical-ai/module4-vla.mdx` for clarity and pedagogical effectiveness.

---

## Phase 5: User Story 3 - Review Learning Outcomes and Weekly Breakdown (Priority: P2)

**Goal**: Learners can easily find and understand the specific learning outcomes and the weekly progression of the course content.

**Independent Test**: A learner can find the list of learning outcomes and review the weekly breakdown of topics.

### Implementation for User Story 3

- [ ] T014 [P] [US3] Create `frontend/docs/physical-ai/learning-outcomes.mdx` with the learning outcomes content.
- [ ] T015 [P] [US3] Create `frontend/docs/physical-ai/weekly-breakdown.mdx` with the weekly breakdown content.
- [ ] T016 [US3] Update `frontend/docusaurus.config.js` to include sidebar items for `learning-outcomes.mdx` and `weekly-breakdown.mdx`.

---

## Phase 6: User Story 4 - Understand Hardware Requirements and Lab Setup (Priority: P3)

**Goal**: Learners can comprehend the necessary hardware requirements for the course, including workstation specifications, edge kits, and various robot lab options.

**Independent Test**: A learner can read the hardware requirements section and understand the different options for setting up their lab.

### Implementation for User Story 4

- [ ] T017 [P] [US4] Create `frontend/docs/physical-ai/hardware-requirements.mdx` with hardware requirement details.
- [ ] T018 [P] [US4] Create `frontend/docs/physical-ai/lab-setup-options.mdx` with lab setup options content.
- [ ] T019 [US4] Update `frontend/docusaurus.config.js` to include sidebar items for `hardware-requirements.mdx` and `lab-setup-options.mdx`.

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: General improvements and final checks.

- [ ] T020 Review all `frontend/docs/physical-ai/*.mdx` files for clarity, formatting, and pedagogical effectiveness.
- [ ] T021 Validate `frontend/docusaurus.config.js` for correct sidebar and navigation configurations.
- [ ] T022 Run Docusaurus build (`npm run build` in `frontend/`) and verify successful completion without errors.
- [ ] T023 Update `README.md` with instructions for running the Docusaurus site.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately.
- **Foundational (Phase 2)**: No specific tasks for this feature.
- **User Stories (Phase 3+)**: All depend on Setup (Phase 1) completion.
  - User stories can then proceed in parallel (if staffed) or sequentially in priority order (P1 → P2 → P3).
- **Polish (Final Phase)**: Depends on all desired user stories being complete.

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Setup (Phase 1) - No dependencies on other stories.
- **User Story 2 (P1)**: Can start after Setup (Phase 1) - Depends on US1 content being created for review.
- **User Story 3 (P2)**: Can start after Setup (Phase 1) - No direct dependencies on US1 or US2.
- **User Story 4 (P3)**: Can start after Setup (Phase 1) - No direct dependencies on US1, US2, or US3.

### Within Each User Story

- Content creation tasks can be done in parallel.
- Docusaurus config updates should be done after content files are created.

### Parallel Opportunities

- All tasks marked [P] can run in parallel.
- After Phase 1, User Stories 1, 3, and 4 can start in parallel (content creation aspects).
- User Story 2 depends on US1's content, so its review tasks should follow US1's content creation.

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup.
2. Complete Phase 3: User Story 1 (content creation and initial sidebar config).
3. **STOP and VALIDATE**: Test User Story 1 independently (e.g., check if chapters load).
4. Deploy/demo if ready.

### Incremental Delivery

1. Complete Phase 1: Setup.
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!).
3. Add User Story 2 → Test independently → Deploy/Demo.
4. Add User Story 3 → Test independently → Deploy/Demo.
5. Add User Story 4 → Test independently → Deploy/Demo.
6. Each story adds value without breaking previous stories.

### Parallel Team Strategy

With multiple developers:

1. Team completes Phase 1 (Setup) together.
2. Once Setup is done:
   - Developer A: User Story 1 (Content Creation) & User Story 2 (Content Review).
   - Developer B: User Story 3 (Learning Outcomes & Weekly Breakdown).
   - Developer C: User Story 4 (Hardware Requirements & Lab Setup).
3. Stories complete and integrate independently.

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence
