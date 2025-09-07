# Personal Expense Manager PWA

This is a mobile-first Personal Expense Manager Progressive Web App (PWA) built with Next.js, React, and Material-UI.

## Features

-   **Add, Edit, and Delete Expenses:** Easily manage your expenses with a clean and simple interface.
-   **Categorize Expenses:** Assign categories to your expenses (e.g., Food, Transport, Utilities).
-   **Expense History:** View a chronological list of all your expenses.
-   **Dashboard with Charts:** Visualize your spending with a pie chart showing expenses by category and a bar chart showing daily expenses.
-   **Dark Mode:** Switch between light and dark mode for comfortable viewing.
-   **PWA Ready:** Install the app on your mobile device for a native-like experience and use it offline.
-   **Responsive Design:** Works beautifully on mobile, tablet, and desktop.
-   **No Backend Required:** All data is stored securely in your browser's `localStorage`.

## Tech Stack

-   [Next.js](https://nextjs.org/) 14 (App Router)
-   [React](https://reactjs.org/) 18
-   [Material-UI (MUI)](https://mui.com/)
-   [Recharts](https://recharts.org/) for charts
-   [Serwist](https://serwist.pages.dev/) for PWA features
-   [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/) for form management
-   TypeScript

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

-   [Node.js](https://nodejs.org/) (v18 or later)
-   [npm](https://www.npmjs.com/) (or yarn/pnpm)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone <repository-url>
    cd <repository-directory>
    ```

2.  **Install dependencies:**

    Due to limitations in the environment where this project was created, the `node_modules` directory is not included. You will need to install the dependencies yourself by running:
    ```sh
    npm install
    ```

### Running the Development Server

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## PWA Installation

To install the app as a PWA:

1.  Run the application in production mode (`npm run build` then `npm start`).
2.  Open the application in a supported browser (e.g., Chrome on Android or Safari on iOS).
3.  Look for an "Add to Home Screen" or "Install" button in the browser's menu or address bar.
4.  Follow the on-screen instructions.

## Running with Docker

This project includes a `Dockerfile` to build and run the application in a container.

1.  **Build the Docker image:**
    ```sh
    docker build -t expense-manager-pwa .
    ```

2.  **Run the Docker container:**
    ```sh
    docker run -p 3000:3000 expense-manager-pwa
    ```

The application will be available at [http://localhost:3000](http://localhost:3000).
