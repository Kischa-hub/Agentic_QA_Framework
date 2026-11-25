# Mini Agentic QA Framework

This project uses Codex and Playwright Test to turn Markdown requirements into browser tests for Automation Exercise. You review the proposed cases before Codex implements them. Playwright runs the tests and saves the evidence that Codex can use to investigate failures.

The current suite covers successful login and disposable-account deletion, invalid credentials, and logout. Tests are written in TypeScript and use the Page Object Model.

## Skills and workflow

### 1. Design cases with `$qa-test-designer`

The designer reads a feature under [requirements/](requirements/), maps each scenario to its acceptance criteria, and writes matching JSON and Markdown files under [test-cases/](test-cases/). It flags gaps in expected behavior and leaves new cases at `pending-review`.

> Use $qa-test-designer to review requirements/automation-exercise-login.md and draft test cases. Stop for my review.

Review the [Markdown copy](test-cases/automation-exercise-login.md), then record your decision in the [JSON case file](test-cases/automation-exercise-login.json). Use `approved` for cases to automate, `rejected` for cases you decline, and `pending-review` for cases that need more review. [Test Designer skill](.agents/skills/qa-test-designer/SKILL.md)

### 2. Implement approved cases with `$qa-automation-engineer`

The engineer turns approved cases into independently runnable tests under [tests/](tests/). It puts shared locators and UI actions in page objects under [pages/](pages/) and keeps scenario flow and acceptance assertions in the specs. It checks types and Playwright test discovery. The login spec reads the JSON approval status when Playwright registers each case.

> Use $qa-automation-engineer to implement the approved cases in test-cases/automation-exercise-login.json.

[Automation Engineer skill](.agents/skills/qa-automation-engineer/SKILL.md)

### 3. Run the tests locally

From the repository root, install the dependencies and Chromium using Node.js 24 and npm:

```sh
npm ci
npx playwright install chromium
npm run typecheck
```

Playwright defaults to Automation Exercise. Set `WEBSITE_URL` to override the base URL. [Playwright configuration](playwright.config.ts)

Create or edit `.env` next to `package.json`. Git ignores this file, and Playwright loads it automatically. Register two separate test accounts before running the full login suite and use their exact signup display names.

| Case | Variables in `.env` |
| --- | --- |
| `LOGIN-01` | `AUTOMATION_EXERCISE_EMAIL`, `AUTOMATION_EXERCISE_PASSWORD`, `AUTOMATION_EXERCISE_DISPLAY_NAME`. Use a disposable account because this case deletes it. |
| `LOGIN-02` | `AUTOMATION_EXERCISE_INVALID_PASSWORD`. Use a non-empty dummy value such as `intentionally-wrong`. The test generates its own unregistered email. |
| `LOGIN-03` | `AUTOMATION_EXERCISE_LOGOUT_EMAIL`, `AUTOMATION_EXERCISE_LOGOUT_PASSWORD`, `AUTOMATION_EXERCISE_LOGOUT_DISPLAY_NAME`. Use a separate account that you can reuse. |

```sh
npm test -- --list                                 # Check which tests Playwright discovers
npm test -- automation-exercise-login.spec.ts       # Run the approved cases in the login spec
npm run report                                     # Open the latest HTML report
```

Playwright writes the JSON report to `test-results/results.json`. When available, failed-test screenshots, traces, and error context are also saved under `test-results/`.

### 4. Investigate failures with `$qa-failure-analyst`

The analyst reads the artifacts from your local run, follows the error to the failing step, and recommends a fix. For a confirmed locator mismatch, it adds a `Created By AI` comment directly above the affected locator describing the observed difference and the recommendation. The comment is the only permitted source edit.

> Use $qa-failure-analyst to analyze the latest local run in test-results/. Explain why LOGIN-01 failed and how to fix it.

[Failure Analyst skill](.agents/skills/qa-failure-analyst/SKILL.md)
