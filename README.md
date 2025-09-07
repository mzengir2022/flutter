# Time & Calendar App

A simple, single-page application that displays the current time and a calendar, built with Next.js and Material-UI.

## Features

-   **Live Clock:** Displays the current time, updating every second.
-   **Interactive Calendar:** A full-featured calendar to view dates.
-   **Custom Theme:** Styled with a red and black color theme using Material-UI.
-   **Responsive Design:** Works on mobile, tablet, and desktop.

## Tech Stack

-   [Next.js](https://nextjs.org/) 14 (App Router)
-   [React](https://reactjs.org/) 18
-   [Material-UI (MUI)](https://mui.com/)
-   [React Day Picker](https://react-day-picker.js.org/)
-   TypeScript

## Getting Started

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
    ```sh
    npm install
    ```

### Running the Development Server

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Running with Docker

This project includes a `Dockerfile` to build and run the application in a container.

1.  **Build the Docker image:**
    ```sh
    docker build -t time-calendar-app .
    ```

2.  **Run the Docker container:**
    ```sh
    docker run -p 3000:3000 time-calendar-app
    ```

The application will be available at [http://localhost:3000](http://localhost:3000).
