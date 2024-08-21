const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureCypress(on, {
        resultsDir: "./allure-results",
        links: [
          { type: "issue", urlTemplate: "https://issues.example.com/%s" },
          { type: "tms", urlTemplate: "https://tms.example.com/%s" },
        ],
      });
    },
  },
});