# Tasks: Add Urdu Translation Button to Chapters

## T001 - Create ChapterTranslator Component
- Create `frontend/src/components/ChapterTranslator.tsx`.
- Implement state management for current language (English/Urdu).
- Add toggle button with initial text 'ترجمہ کریں (Urdu)'.
- Ensure button text switches to 'English' when showing Urdu content.

## T002 - Implement Mock Translation API
- Create a simple mock translation function returning placeholder Urdu text.
- Ensure it accepts a string input and returns translated string output.
- Handle errors gracefully (fallback to English content).

## T003 - Integrate Component into Chapters
- Identify all chapter MDX files.
- Wrap each chapter content with `ChapterTranslator` component.
- Pass English content as a prop to the component.

## T004 - Maintain Formatting
- Ensure headings, lists, code blocks, and other Markdown/HTML elements render correctly after translation.
- Test across multiple chapters with varying content structures.

## T005 - Styling & UX
- Style the toggle button consistent with the existing Docusaurus theme.
- Position button at the top of the chapter content.
- Ensure the button is responsive and accessible.

## T006 - Testing & Validation
- Test toggle functionality on all chapters.
- Verify formatting preservation.
- Test edge cases: empty chapters, long content, rapid clicks.
- Validate the mock translation API works as expected.

## T007 - Future Integration Preparation
- Document the mock API for later replacement.
- Ensure component props and state management allow future API swapping without major refactoring.
