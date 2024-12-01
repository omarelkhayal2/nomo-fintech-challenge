# Nomo Fintech Mobile Automation Challenge

## Table of Contents
- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running Tests](#running-tests)
- [Generate Reports](#generate-reports)
- [Screen Recording Video](#screen-recording-video)
- [Test Framework Components](#test-framework-components)
  - [Page Objects](#page-objects)
  - [Feature Files](#feature-files)
  - [Step Definitions](#step-definitions)
- [Best Practices](#best-practices)

## Overview
This project is an automated testing framework built using WebdriverIO and Appium for mobile application testing. It follows the Page Object Model design pattern and uses Cucumber for behavior-driven development (BDD).

## Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)
- Appium Server (v2.0 or higher)
- Android SDK (for Android testing)
- Xcode (for iOS testing, macOS only)
- Java Development Kit (JDK)

## Project Structure
├── features/
│   ├── login.feature
│   └── step-definitions/
│       └── login.steps.js
├── pages/
│   ├── BasePage.js
│   ├── LoginPage.js
│   └── ProductsPage.js
├── wdio.conf.js
├── package.json
└── README.md

## Installation
1. Clone the repository:

```bash
git clone <repository-url>
```

2. Install dependencies:

```bash
npm install
```

3. Start Appium server:

```bash
appium
```

## Configuration
The framework configuration is managed in `wdio.conf.js`. Key configurations include:
- Device capabilities
- Test framework settings
- Reporter settings
- Cucumber options

To modify device capabilities, update the `capabilities` section in `wdio.conf.js` and add the new capabilities for the new device

## Running Tests
Execute all tests:

```bash
npx wdio run wdio.conf.js
```

## Test Reports 

The test reports are generated in the `reports` folder after running the tests and executing the following command:

```bash
allure generate ./reports/allure-results --clean -o allure-report
```

then open the allure UI  in Browser

```bash
allure open allure-report
```

## Screen Recording Video
As requested in the task , the screen recording video is in the root folder with name `video.mov` which includes full run on android device. In the video, you can see the test running on the emulator beside the terminal and appium server to check the logs on them and after the test is done it will generate the report and open the allure UI to see the report

## Test Framework Components

### Page Objects
Page objects are located in the `pages/` directory. Each page object represents a screen in the application and contains:
- Element locators
- Page-specific methods
- Common interactions

Example page object structure:

```javascript
class LoginPage {
    // Element locators
    // Page methods
    // Assertions
}
```

### Feature Files
Feature files in the `features/` directory describe test scenarios in Gherkin syntax:

```gherkin
Feature: Login Functionality
    Scenario: Valid login
        Given I am on the login page
        When I enter valid credentials
        Then I should be logged in successfully
```

### Step Definitions
Step definitions in `features/step-definitions/` implement the steps described in feature files:

```javascript
Given('I am on the login page', async function() {
    await LoginPage.open();
});
```

## Best Practices
- Use meaningful names for features, scenarios, and step definitions
- Keep page objects focused and maintainable
- Follow DRY (Don't Repeat Yourself) principle
- Implement proper error handling
- Use explicit waits instead of hard delays
- Maintain clean and documented code