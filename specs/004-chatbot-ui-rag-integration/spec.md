# Chatbot UI Integration (Frontend)

## **Objective**
Integrate a fully functional Chatbot UI into the Docusaurus frontend inside `src/components`, including React components, styling files, and embedding the chat widget into site pages.

## **Scope**
This feature includes:

### **Components**
*   `Chatbot.tsx` – Main chat interface
*   `Chatbot.css`
*   `ThreeDotBounce.tsx` – Typing indicator
*   `ThreeDotBounce.css`

### **Frontend UI Behaviour**
*   Floating chatbot button visible on all pages.
*   Click to open/close the chatbot window.
*   Chat messages scroll smoothly.
*   Loading animation (three dots) during backend response.
*   API request to backend `/chat` endpoint via `fetch`.

### **Integration**
*   **Location:** Components stored in `frontend/src/components/chatbot/`
*   **Injection:** Chatbot injected into the Docusaurus layout via `src/theme/Root.tsx` (persistent)
*   **Config:** Environment variable `VITE_BACKEND_URL` for API endpoint.

### **Out of Scope**
*   No RAG system yet
*   No authentication
*   No OpenAI Agent configuration
*   No backend logic (already implemented separately)

## **Requirements**

### **Functional Requirements**
*   User can open/close chatbot.
*   User can send a message.
*   UI shows user messages and bot messages.
*   UI shows loading animation while waiting.
*   Messages persist in component state.
*   Chat component works on mobile and desktop.

### **Non-Functional Requirements**
*   Clean, reusable React components.
*   CSS isolated per component.
*   No global stylesheet side effects.
*   Stable API call handling with proper error reporting.

## **Success Criteria**
*   [ ] Chatbot UI appears correctly.
*   [ ] Messages send/receive with correct UX.
*   [ ] No UI blocking or layout breaking.
*   [ ] Component remains accessible from all pages.

