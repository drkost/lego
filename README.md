# Project name

Lego Education Challenge

## Project info

 - Effective handling of multiple locales and translations in automations scripts.
 - POM
 - CI/CD
      * Tests with @Smoke tag are run on every PR - 2 workers
      * Tests with @Regression tag are run every night @ 00:00 - 4 workers
      * Manually run form github UI workflow (smoke tests)

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository: git clone https://github.com/drkost/lego.git local-repo-name
   
2. Enter local repo: cd local-repo-na
   
3. Install PlaywrightL: npm init playwright@latest

4. Run tests
   - Playwright ui: npx playwright test --ui
   - Headless: npx playwright test
