# Next.js Starter Project

This is a clean, mobile-first starter project for Next.js, created with:

-   Next.js 14 (App Router)
-   TypeScript
-   Tailwind CSS
-   ESLint
-   Prettier

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) (version 18 or later) and [npm](https://www.npmjs.com/) installed on your machine.

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

Once the dependencies are installed, you can run the development server:

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The page will auto-update as you edit the files.

## Building for Production

To create a production build, run:

```sh
npm run build
```

This will create an optimized build of the application in the `.next` folder.

## Running in Production

To run the production server, use:

```sh
npm start
```

## Running with Docker

This project includes a `Dockerfile` to build and run the application in a container.

1.  **Build the Docker image:**

    ```sh
    docker build -t nextjs-starter .
    ```

2.  **Run the Docker container:**

    ```sh
    docker run -p 3000:3000 nextjs-starter
    ```

    The application will be available at [http://localhost:3000](http://localhost:3000).
