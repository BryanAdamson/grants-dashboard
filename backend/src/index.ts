import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './graphql/typeDefs';
import { resolvers } from './graphql/resolvers';
import connectDB from './config';
import cors from 'cors';

/**
 * Starts the Express server with Apollo GraphQL middleware.
 *
 * This function initializes an Express application, applies CORS settings, sets up an Apollo Server
 * with the provided type definitions and resolvers, connects to the MongoDB database, and finally
 * starts the server on the specified port. It handles errors during server startup and database
 * connection to ensure the application exits gracefully if any critical operation fails.
 */
const startServer = async () => {
    try {
        const app = express();

        // Apply CORS middleware
        app.use(cors({
            origin: '*',
            credentials: true,
        }));

        // Initialize Apollo Server with type definitions and resolvers
        let server: ApolloServer;

        try {
            server = new ApolloServer({ typeDefs, resolvers });
            await server.start();
            server.applyMiddleware({ app });
            console.log('Apollo Server initialized');
        } catch (error) {
            console.error('Failed to initialize Apollo Server:', (error as Error).message);
            throw error;
        }

        // Connect to the MongoDB database
        try {
            await connectDB();
            console.log('Connected to MongoDB');
        } catch (error) {
            console.error('Failed to connect to MongoDB:', (error as Error).message);
            throw error;
        }

        const PORT = process.env.PORT || 4000;

        app.listen({ port: PORT }, () => {
            console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
        }).on('error', (error: NodeJS.ErrnoException) => {
            console.error('Failed to start Express server:', error.message);
            process.exit(1);
        });

    } catch (error) {
        if (error instanceof Error) {
            console.error('Failed to start server:', error.message);
        } else {
            console.error('An unknown error occurred while starting the server.');
        }
        process.exit(1);
    }

    process.on('SIGINT', () => {
        console.log('Received SIGINT. Shutting down gracefully...');
        process.exit(0);
    });

    process.on('SIGTERM', () => {
        console.log('Received SIGTERM. Shutting down gracefully...');
        process.exit(0);
    });
};

// Start the server
startServer();
