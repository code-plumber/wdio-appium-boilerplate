# WDIO Appium Boilerplate

Welcome to the **WDIO Appium Boilerplate** repository! This project sets up a testing framework using TypeScript, WebdriverIO (WDIO), and Appium to test Flutter-based mobile applications. It follows the Page Object (or Screen Object) pattern to maintain clean and manageable code for automated tests.

## Project Structure

The project is organized as follows:

- **`mobile-testing/`**: Root directory of the project.
  - **`data/`**: Contains test data and other data files.
    - `testdata.json`: Sample test data used in test cases.
  - **`app/`**: Contains APK or IPA build files and versions to be tested.
  - **`test/`**: Holds all test-related files.
    - **`screenobjects/`**: Contains screen object or locator files, adhering to the Page Object pattern.
    - **`spec/`**: Contains the test specifications or test cases.
  - **`wdio.conf.ts`**: Configuration file for WebdriverIO.
  - **`tsconfig.json`**: TypeScript configuration file.

## Getting Started

To get started with this project, follow the steps below:

### Prerequisites

- **Node.js**: Ensure Node.js is installed on your machine. [Download Node.js](https://nodejs.org/)
- **npm**: Node Package Manager, usually comes with Node.js.

### Installation

1. Clone the repository:

    ```bash
    git clone git@github.com:code-plumber/wdio-appium-boilerplate.git
    ```

2. Navigate into the project directory:

    ```bash
    cd wdio-appium-boilerplate
    ```

3. Install the required dependencies:

    ```bash
    npm install
    ```

### Configuration

- **WebdriverIO Configuration**: Modify `wdio.conf.ts` to configure WebdriverIO settings such as browser options, reporter settings, and other configuration details.

- **Appium Inspector**: Use Appium Inspector to find locators on the mobile app. This tool helps you identify the elements for writing test cases. [Download Appium Inspector](https://github.com/appium/appium-inspector/releases)

### Running Tests

To run the test cases, use the following npm command:

```bash
npm run wdio
