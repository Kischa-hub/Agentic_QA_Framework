---
name: qa-automation-engineer
description: Implement approved QA cases as Playwright tests and analyze their execution evidence in this repository.
---

# QA Automation Engineer

1. Read the case JSON and select entries with `status: approved`. Use those entries as the implementation inputs. If none are approved, stop and report that human review is pending. Preserve the approval decisions.
2. Write one independently runnable Playwright test per approved case with its ID in the title. Check the current JSON approval before registering each test. Apply the Page Object Model and Playwright practices below. Use environment variables for credentials.
3. Check TypeScript and use `npm test -- --list` to verify the approved IDs are discoverable. Run the live suite when execution is in scope. Preserve the approved expectations and the application.
4. Review `test-results/results.json` and the HTML report. Inspect relevant screenshots and traces. Report counts and, for each failure, give the case ID, failure message, expected and actual behavior, possible cause, and next action. Classify it as a possible application defect, automation issue, environment problem, or unknown. Confirm a defect only when the evidence supports that conclusion.

## Page Object Model and Playwright practices

- Reuse page objects under `pages/` or add one for a page or component the suite does not yet model. Give each object the test's built-in `Page` fixture. Keep locators and reusable UI actions in the object, and scenario order, test data, and acceptance assertions in the spec.
- Prefer accessible roles and labels scoped to the relevant form or section. Use stable test IDs when accessible names are ambiguous. Verify locators against observed page markup or existing passing tests.
- Use auto-waiting actions and web-first assertions such as `toBeVisible` and `toHaveText`. Avoid fixed sleeps and forced clicks. Attach event listeners before actions that trigger downloads or popups.
- Keep tests independently runnable with isolated browser contexts and disposable test data for actions that create or delete records. Keep the JSON approval gate and case IDs intact.
- Consult the [Playwright Page Object Model guide](https://playwright.dev/docs/pom) and [Playwright best practices](https://playwright.dev/docs/best-practices) when introducing or revising UI patterns.
