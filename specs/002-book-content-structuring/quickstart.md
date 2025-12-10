# Quickstart: Book Content Structuring and Chapter Division

This guide provides a quick overview of how to get the Docusaurus frontend up and running to view the structured book content.

## Prerequisites

- Node.js (v18 or higher)
- npm or Yarn

## Setup and Run

1.  **Navigate to the frontend directory**:
    ```bash
    cd frontend
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    # or yarn install
    ```

3.  **Start the development server**:
    ```bash
    npm start
    # or yarn start
    ```

    This will open a new browser window with the Docusaurus development server running (usually at `http://localhost:3000`).

## Content Location

All book content (chapters, modules, etc.) is located in the `frontend/docs/` directory. You can create new markdown (`.md`) or MDX (`.mdx`) files in this directory, and Docusaurus will automatically detect and integrate them into the site's navigation based on its sidebar configuration.

## Building for Production

To create a production build of the static site:

```bash
npm run build
# or yarn build
```

The static assets will be generated in the `frontend/build/` directory, ready for deployment.