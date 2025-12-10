# Plan: Add Urdu Translation Button to Chapters

## Objective
Implement a toggle button for each Docusaurus chapter that allows users to switch between English and Urdu translations. Utilize a reusable React component (`ChapterTranslator`) and a mock translation API for initial implementation.

## Strategy

1. **Component Design**
   - Create a reusable `ChapterTranslator.tsx` component.
   - Include a button at the top of the chapter content to toggle translation.
   - Maintain language state inside the component.

2. **Mock Translation API**
   - Implement a simple function returning placeholder Urdu text for now.
   - Ensure the API can later be replaced by a real translation service.

3. **Integration**
   - Wrap each chapter’s MDX content with the `ChapterTranslator` component.
   - Pass the original English content as a prop.
   - Ensure the button toggles between English and Urdu.

4. **UI/UX**
   - Button text updates based on current language state.
   - Maintain existing formatting of chapter content (Markdown/HTML).
   - Ensure responsiveness and styling consistent with Docusaurus theme.

5. **Testing**
   - Verify toggling works for all chapters.
   - Check formatting is preserved after translation.
   - Test rapid clicking, empty content, and long content.

6. **Future Proofing**
   - Keep component modular for future integration with real translation API.
   - Ensure state management and props allow easy API replacement.
