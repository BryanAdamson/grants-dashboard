
# Grants Dashboard Frontend

This is the frontend of the Grants Dashboard application, built using React.js and TypeScript. The frontend allows users to view grant opportunities, submit feedback on these opportunities, and interact with the application through a user-friendly interface.

## Table of Contents

-   [Features](#features)
-   [Project Structure](#project-structure)
-   [Installation](#installation)
-   [Usage](#usage)
-   [Technologies Used](#technologies-used)
-   [License](#license)

## Features

-   **Responsive Design**: The interface is designed to work well on both desktop and mobile devices.
-   **User Interactions**: Users can submit feedback on grant opportunities via a modal that appears when clicking thumbs-up or thumbs-down.
-   **State Management**: Global state is managed using React Context and custom hooks.

## Project Structure

```
frontend
├── public                # Public files (e.g., index.html)
├── src
│   ├── components        # Reusable React components
│   │   ├── Card          # Components related to grant cards
│   │   ├── Layout        # Layout components like Header
│   │   └── Table         # Components for displaying tables
│   ├── context           # React Context for global state
│   ├── hooks             # Custom React hooks
│   ├── pages             # Page components (e.g., Dashboard)
│   ├── services          # API service functions for making requests
│   ├── styles            # CSS modules for styling
├── Dockerfile            # Dockerfile for containerizing the frontend
├── package.json          # NPM package file
├── tsconfig.json         # TypeScript configuration file
└── README.md             # Project README`

```

## Installation

1.  **Clone the repository:**

    ```
        git clone https://github.com/yourusername/grants-dashboard-frontend.git
        cd grants-dashboard-frontend
    ```

2.  **Install dependencies:**

    ```
    npm install
    ```

## Usage

1.  **Start the development server:**

    ```
    npm start
    ```
2.  **Access the application in your browser:**

    ```
    http://localhost:3000
    ```
    The frontend will connect to the backend API at the configured GraphQL endpoint.

## Technologies Used

-   **Frontend**: React.js, TypeScript, CSS Modules
-   **State Management**: React Context API, Custom Hooks
-   **Styling**: CSS Modules

## License

This project is licensed under the MIT License.