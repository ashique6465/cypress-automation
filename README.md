# Cypress UI and API Automation Framework
 
This repository contains an end-to-end automation framework built using Cypress.  
The framework covers both UI automation and REST API automation and follows real-world automation best practices such as Page Object Model (POM), fixture-based test data, and CI/CD integration using GitHub Actions.
 
Tech Stack:
- Cypress
- JavaScript
- Node.js
- REST API Testing
- GitHub Actions (CI/CD)
 
UI Automation Coverage (SauceDemo):
- Login with valid credentials
- Login with invalid credentials
- Inventory page validation
- Add product to cart
- Cart count verification
- Checkout flow
- Order confirmation validation
 
API Automation Coverage:
- GET users
- POST create user
- PUT update user
- DELETE user
- Status code validation
- Response body validation
- Negative API scenarios
 
Project Structure:
cypress/
├── e2e/
│   ├── login.cy.js
│   ├── users_api.cy.js
│   └── users_crud.cy.js
├── pages/
│   ├── LoginPage.js
│   ├── InventoryPage.js
│   └── CheckoutPage.js
├── fixtures/
│   ├── LoginData.json
│   ├── users.json
│   └── updateUser.json
└── screenshots/
.github/
└── workflows/
     └── cypress.yml
 
How to Run the Project:
 
1. Clone the repository
git clone <repository-url>
cd <repository-folder>
 
2. Install dependencies
npm install
 
3. Run all tests (UI + API) in headless mode
npx cypress run
 
4. Run Cypress in interactive mode
npx cypress open
 
5. Run a specific test file
npx cypress run --spec cypress/e2e/login.cy.js
 
Continuous Integration:
This project is integrated with GitHub Actions.  
On every push or pull request to the main branch, Cypress tests are automatically executed in headless mode.  
The CI pipeline installs dependencies, installs the Cypress binary, and runs all UI and API tests.
 
Key Highlights:
- Page Object Model for UI automation
- Data-driven testing using Cypress fixtures
- REST API CRUD automation using cy.request()
- Negative API testing
- GitHub Actions CI pipeline
- Node and Cypress compatibility handling
