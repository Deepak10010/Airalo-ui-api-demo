# Airalo UI & API Automation Framework

## Overview

This repository contains an end-to-end automation framework for testing both the UI and API components of the Airalo platform. It leverages modern tools like Playwright, Cucumber.js, and follows a scalable and maintainable design.

---

## Features

### UI Automation
- Built with **Playwright + Cucumber.js** for BDD-style testing.
- Implements **Page Object Model (POM)** for modular and reusable code.
- Automates key flows such as:
  - Searching for a country (e.g., Japan)
  - Selecting eSIMs
  - Verifying modal/popup content

### API Automation
- Uses Playwright's **APIRequestContext** for HTTP requests.
- Includes token generation using **OAuth2 (Bearer Token)**.
- Covers:
  - Placing orders (POST)
  - Retrieving list of eSIMs (GET)
  - Validating content and structure of API responses

---

## Project Structure

```
├── dist/
├── node_modules/
├── playwright-report/             # HTML reports for API tests
├── reports/                       # Extent reports for UI tests
│   ├── ui/
│   └── api/
├── src/
│   └── tests/
│       ├── api/                   # API test specs
│       └── ui/
│           ├── features/         # Gherkin .feature files
│           ├── locators/         # All XPath/CSS locators
│           ├── pages/            # Page definition files (POM)
│           ├── steps/            # Step definitions
│           └── testData/         # Test data in JSON
├── .env                           # Environment-specific variables (ignored in Git)
├── .gitignore
├── README.md
├── playwright.config.ts           # Playwright configuration
├── generateReport-ui.js           # Generates Extent report for UI
├── generateReport-api.js          # Generates HTML report for API
├── cucumber.js
├── package.json
```

---

## Reporting

### UI Tests
- Uses **multiple-cucumber-html-reporter** to generate Extent-style HTML reports.
- Automatically generates and opens reports after test execution.

### API Tests
- Uses **Playwright's built-in HTML reporter**.
- Automatically opens Playwright's test report after execution.

---

## Scripts

| Command                   | Description                                      |
|--------------------------|--------------------------------------------------|
| `npm run test:ui`        | Runs UI tests                                    |
| `npm run test:api`       | Runs API tests                                   |
| `npm run test:ui:report` | Runs UI tests and opens Extent report            |
| `npm run test:api:report`| Runs API tests and opens Playwright HTML report  |
| `npm run test`           | Runs both API and UI tests                       |

---

## Setup Instructions

1. **Clone the repo**
```bash
git clone https://github.com/<your-username>/airalo-ui-api-framework.git
cd airalo-ui-api-framework
```

2. **Install dependencies**
```bash
npm install
```

3. **Create a `.env` file**
```env
BASE_URL=https://api.example.com
CLIENT_ID=your-client-id
CLIENT_SECRET=your-client-secret
```

4. **Run tests and generate reports**
```bash
npm run test:ui:report       # for UI
npm run test:api:report      # for API
```

---

## Best Practices Followed
- Page Object Model
- Behavior Driven Development
- Secure .env management
- Test data externalization
- Cross-browser and headless compatibility (configurable)

---

## Note
This project is designed to be scalable and maintainable for teams working on both frontend and backend validation. Reports are separated based on test type (UI/API), ensuring clean analysis.

---


