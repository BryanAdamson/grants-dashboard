# Grants Dashboard Backend

This is the backend service for the Grants Dashboard application. The backend is built using Node.js, TypeScript, and GraphQL, with MongoDB as the database. It provides a GraphQL API for managing grant opportunities and feedback.

## Features

-   **GraphQL API**: Provides a flexible and efficient API for managing grants.
-   **TypeScript**: Ensures type safety and enhances code quality.
-   **MongoDB**: Used as the persistent storage for grants data.
-   **Docker Compose**: Manages the backend and MongoDB services in separate containers.
-   **Testing**: Includes unit and integration tests using Jest and Supertest.

## Prerequisites

Before you begin, ensure you have met the following requirements:

-   **Docker**: Installed and running
-   **Docker Compose**: Installed and running

## Installation

1.  **Clone the Repository**:
    ```
    git clone https://github.com/yourusername/grants-dashboard-backend.git
    cd grants-dashboard-backend
    ```

2.  **Set Up Environment Variables**:

    Create a `.env` file in the root directory and add the following:
    ```
    MONGO_URI=mongodb://localhost:27017/grants-dashboard
    ```

    The `MONGO_URI` should match the MongoDB service name in the `docker-compose.yml` file.


## Running the Backend

### Using Docker Compose

To run the backend and MongoDB services using Docker Compose:

1.  **Start the Services**:

    ```
    docker-compose up -d 
    ```

    This command will start both the backend and MongoDB services in the background.

2.  **Access the Backend API**:

    The backend service will be available at `http://localhost:4000/graphql`.


### Stopping the Services

To stop the services, run:

```
docker-compose down 
```

This will stop and remove the containers for both the backend and MongoDB services.

## Running Tests

To run the tests:

1.  **Bring Up the Services** (if they are not already running):
    ```
    docker-compose up -d 
    ```

2.  **Run Tests**:
    ```
    docker-compose exec backend npm test
    ```


This will execute both unit and integration tests inside the backend container.

## API Documentation

The backend exposes a GraphQL API. You can explore and test the API using a tool like [GraphQL Playground](https://github.com/graphql/graphql-playground) or Postman.

### Example Queries and Mutations

-   **Get All Grants**:

    graphql

    ```
    query {
        getGrants {
            id
            foundationName
            grantName
            averageAmount
            location
            areaOfFunding
            status
            matchDate
            deadline
        }
    }
    ```

-   **Create a Grant**:

    graphql

    ```
    mutation {
        createGrant(
            grantInput: {
                foundationName: "Test Foundation",
                grantName: "Test Grant",
                averageAmount: 100000,
                location: "Test City",
                areaOfFunding: ["Education"],
                matchDate: "2024-01-01",
                deadline: "2024-01-31"
            }
        ) {
            id
            foundationName
            grantName
        }
    }
    ```

-   **Update a Grant**:

    graphql

    ```
    mutation {
        updateGrant(
            id: "grant_id", 
            grantInput: {
                foundationName: "Updated Foundation",
                grantName: "Updated Grant",
                averageAmount: 150000,
                location: "Updated City",
                areaOfFunding: ["Research"],
                matchDate: "2024-02-01",
                deadline: "2024-02-28"
            }
        ) {
            id
            foundationName
            grantName
        }
    }
    ```

-   **Delete a Grant**:

    ```
    mutation {
        deleteGrant(
            id: "grant_id"
        ) {
            id
            foundationName
        }
    }
    ```

-   **Delete a Grant**:
    ```
    mutation {
        submitFeedback(
            id: "grant_id", 
            feedback: "This is my feedback", 
            status: "Accepted"
        ) {
            id
            status
            feedback
        }
    }
    ```


## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.