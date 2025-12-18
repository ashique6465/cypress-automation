# Cypress Automation Project (UI + API)
 
This project demonstrates end-to-end UI automation and REST API automation
using Cypress.
 
UI Automation:
- Login
- Inventory
- Add to Cart
- Checkout
 
API Automation:
- GET, POST, PUT, DELETE
- Positive & negative scenarios
- Data-driven testing using fixtures

## Tech Stack
- Cypress
- JavaScript
- Node.js
- REST API
- GitHub Codespaces


## How to Run the Project
 
### 1. Install dependencies
npm install
 
### 2. Run all tests (UI + API)
npx cypress run
 
### 3. Run UI tests only
npx cypress run --spec cypress/e2e/login.cy.js
 
### 4. Run API tests only
npx cypress run --spec cypress/e2e/api/users_crud.cy.js
 
### 5. Open Cypress Test Runner (if supported)
npx cypress open

## Folder Structure
 
cypress/
├── e2e/
│   ├── login.cy.js
│   ├── api/
│   │   └── users_crud.cy.js
├── fixtures/
│   └── LoginData.json
├── pages/
│   ├── LoginPage.js
│   ├── InventoryPage.js
│   └── CheckoutPage.js


## Test Coverage
 
UI Tests:
- Valid login
- Invalid login
- Add product to cart
- Checkout flow
 
API Tests:
- GET users
- POST create user
- PUT update user
- DELETE user
- Negative scenarios (401 / 404 / 400)
