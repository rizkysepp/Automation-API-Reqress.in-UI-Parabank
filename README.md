#Cypress Automation Test Setup

This guide explains how to set up Cypress for automation testing in your project.

Prerequisites
Before setting up Cypress, make sure you have the following installed:

Node.js (version 12 or later)
npm (comes with Node.js)
Git (optional, for version control)

1. Initialize the Project
First, create a new directory for your project (or use an existing one), and initialize a new Node.js project:

mkdir my-cypress-project
cd my-cypress-project
npm init -y
---------------------------------------------------------------------------------
2. Install Cypress
To install Cypress, run the following command inside your project folder:

npm install cypress --save-dev
---------------------------------------------------------------------------------
3. Open Cypress for the First Time
Once Cypress is installed, you can open it for the first time by running:

npx cypress open

This command will:

Open the Cypress Test Runner.
Automatically create a cypress/ folder with the following structure:

cypress/
  ├── fixtures/   // Stores test data
  ├── integration/ // Stores your test files
  ├── plugins/    // Custom plugin configurations
  └── support/    // Helper functions and utilities
---------------------------------------------------------------------------------
4. Add Your First Test
Create a new test file inside the cypress/integration/ folder:

touch cypress/integration/sample_test.spec.js

Now, open the sample_test.spec.js file and add the following simple test:

describe('Sample Test', () => {
  it('Visits the Cypress website', () => {
    cy.visit('https://www.cypress.io');
    cy.contains('JavaScript End to End Testing Framework');
  });
});

This test will:

Open the Cypress website (cy.visit()).
Verify that the page contains the text "JavaScript End to End Testing Framework" (cy.contains()).
---------------------------------------------------------------------------------
5. Running Tests
Using Cypress Test Runner (GUI)
To run tests interactively using the Cypress Test Runner, use:

npx cypress open

This will open the GUI where you can select your test file (sample_test.spec.js) and run it.