# Implementation Plan for Chatbot UI Integration

## **Phase 1 — Folder Structure**

*   **Create directory:**
    `frontend/src/components/chatbot/`

*   **Files to be created:**
    *   `Chatbot.tsx`
    *   `Chatbot.css`
    *   `ThreeDotBounce.tsx`
    *   `ThreeDotBounce.css`
    *   `index.ts`

## **Phase 2 — Add Chatbot Interface**

*   Implement `Chatbot` component using React.
*   Add textarea/input field.
*   Add chat bubbles.
*   Include scrollable chat area.
*   Add "three dot bounce" loading animation.
*   Fetch backend messages using async function.

## **Phase 3 — Integration with Root Layout**

*   **Modify File:** `frontend/src/theme/Root.tsx` to inject the component:
    ```typescript
    import Chatbot from '../components/chatbot'
    ```
*   Render floating button + `<Chatbot />` component.

## **Phase 4 — Environment Variables**

*   **Add `.env` file:**
    ```env
    VITE_BACKEND_URL=http://localhost:8000
    ```
*   Use `import.meta.env` in API calls.

## **Phase 5 — Testing**

*   Desktop and mobile testing.
*   Test API success and failure conditions.
*   Ensure the component loads on all pages.