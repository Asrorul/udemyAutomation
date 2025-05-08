# Udemy - Cypress E2E Tests

This project contains Cypress E2E tests for the Udemy application using Cucumber BDD and TypeScript.

## HOW TO RUN THE AUTOMATION

### Run on GitHub Actions Dispatch (Recomended way to run and test the automation)

1. Go to GitHub repository → Actions tab
2. Select "Node.js CI" workflow
3. Click on "Run workflow" button
4. Configure inputs:
   - **Generate Report**: Check this to generate a detailed test report
   - **Record Video**: Check this to record test videos
5. Click "Run workflow"

The workflow will:

- Run tests on Ubuntu
- Generate reports if requested
- Record videos if requested
- Upload artifacts (reports, videos, screenshots) to GitHub

### HOW TO RUN LOCALLY

## Prerequisites

- Node.js (v16 or higher)
- npm
- Visual Studio Code

## Project Setup

1. Clone the repository:

```bash
git clone https://github.com/Asrorul/udemyAutomation.git
```

2. Install dependencies:

```bash
cd udemyAutomation
npm install
```

## Running Tests

```bash
# Run all tests
npm run test:cy

# Run specific test scenarios
npm run test:cy -- --env tags=@your-tag
```

## Available Scripts

- `npm run test:cy` - Run tests in headless mode
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run create:report` - Generate test report

## Project Structure

```
├── cypress/
│   ├── e2e/
│   │   └── features/           # Feature files
│   ├── support/
│   │   ├── stepDefinitions/    # Step definitions
│   │   ├── commands.ts         # Custom commands
│   │   └── e2e.ts             # Support file
│   └── pages/                  # Page objects
├── .vscode/                    # VS Code settings
├── reports/                    # Test reports
├── cypress.config.ts           # Cypress configuration
├── cypress.env.json           # Environment variables
├── package.json
└── tsconfig.json
```

## VS Code Setup

1. Required Extensions:

   - [Cucumber (Gherkin) Full Support](https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete)
   - [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
   - [Cypress](https://marketplace.visualstudio.com/items?itemName=cypress-io.cypress)

2. Recommended Extensions:
   - ESLint
   - Prettier

Features enabled:

- Gherkin syntax highlighting
- Step definition navigation (Ctrl+click)
- Cucumber icons for .feature files
- Auto-formatting on save

## Dependencies

Key dependencies and their versions:

- cypress: 12.7.0
- @badeball/cypress-cucumber-preprocessor
- @bahmutov/cypress-esbuild-preprocessor
- typescript
- eslint
- prettier

## Best Practices

1. Use Page Object pattern for better maintainability
2. Keep feature files simple and readable
3. Organize step definitions by feature
4. Use custom commands for common actions
5. Maintain type definitions for better IDE support
