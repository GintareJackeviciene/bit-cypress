import { defineConfig } from 'cypress';
import * as dotenv from 'dotenv';

dotenv.config({
    path: `./cypress/ENV/${process.env.NODE_ENV || 'test'}.env`
});

export default defineConfig({
    env: {
        username: process.env.USER,
        password: process.env.PASSWORD,
        url: process.env.URL,
        apiUrl: process.env.API_URL,
        apiKey: process.env.API_KEY
    },
    e2e: {
        setupNodeEvents() {
            // implement node event listeners here

            console.log('enviroment=========' + process.env.NODE_ENV);
        }
    }
});
