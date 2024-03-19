const { defineConfig } = require("cypress");
require("dotenv").config({
  path: `./cypress/ENV/${process.env.NODE_ENV || "test"}.env`,
});

module.exports = defineConfig({
  env: {
    username: process.env.USER,
    password: process.env.PASSWORD,
    url: process.env.URL,
    api_url: process.env.API_URL,
    api_key: process.env.API_KEY,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      console.log("enviroment=========" + process.env.NODE_ENV);
    },
  },
});
