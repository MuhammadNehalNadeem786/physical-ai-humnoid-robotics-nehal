# Tasks — Better Auth Integration

## T001 — Install Frontend Dependencies
- Add Better Auth React SDK to Docusaurus.
- Verify build compatibility.

## T002 — Setup Auth Directory
- Create frontend/src/auth
- Add boilerplate files.

## T003 — Implement AuthProvider
- Initialize Better Auth client.
- Provide user, status, login, logout methods.

## T004 — Create useAuth Hook
- Expose:
  - user
  - session loading
  - login helpers
  - logout handler

## T005 — Create ProtectedRoute Component
- Redirect unauthenticated users.
- Handle loading and silent refresh.

## T006 — Add Login Component
- Trigger Better Auth hosted login page.

## T007 — Add Signup Component
- Trigger Better Auth hosted signup.

## T008 — Modify Navbar
- Show Login/Signup if logged out.
- Show Profile/Logout if logged in.

## T009 — Protect Chatbot Page
- Wrap chatbot route in ProtectedRoute.

## T010 — Install Backend Dependencies
- Add Better Auth server SDK to FastAPI.

## T011 — Configure Environment Variables
- Add required Better Auth secrets to backend.

## T012 — Add Authentication Middleware
- Validate session for protected backend endpoints.

## T013 — Add Auth Endpoints
- Signup
- Login
- Logout
- Session fetch

## T014 — End-to-End Testing
- Signup flow
- Login flow
- Logout flow
- Protected route testing
- Session persistence
