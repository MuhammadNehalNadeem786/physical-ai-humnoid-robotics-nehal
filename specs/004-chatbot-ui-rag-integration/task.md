# Engineering Tasks for Chatbot UI Integration

## **Task 1 — Create Component Structure**
*   **Create directory:** `frontend/src/components/chatbot/`
*   **Create placeholder files:**
    *   `Chatbot.tsx`
    *   `Chatbot.css`
    *   `ThreeDotBounce.tsx`
    *   `ThreeDotBounce.css`
    *   `index.ts`

## **Task 2 — Implement Chat UI**
*   Build chat window layout.
*   Add message list container.
*   Add user input field.
*   Add send button.
*   Add toggle open/close logic.
*   Add local state for messages.

## **Task 3 — Add Typing Indicator**
*   Implement the `ThreeDotBounce` component.
*   Add associated CSS.

## **Task 4 — Implement API Integration**
*   Add `fetch` request to backend `/chat`.
*   Show typing indicator during waiting.
*   Handle errors (e.g., network failure).
*   Append response to message list.

## **Task 5 — Integrate with Root Layout**
*   Modify `theme/layout/index.tsx`.
*   Add floating button.
*   Add chatbot container.
*   Ensure it loads across all pages.

## **Task 6 — Environment Variable Setup**
*   Add `VITE_BACKEND_URL` in `.env`.
*   Use `import.meta.env` inside API call function.

## **Task 7 — Final QA**
*   Check responsiveness.
*   Check all pages load without UI shift.
*   Validate API request flow.