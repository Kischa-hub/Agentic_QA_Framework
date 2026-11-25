---
name: qa-failure-analyst
description: Analyze failed Playwright tests using reports, traces, and runtime DOM evidence. Annotate confirmed page-object locator discrepancies with a Created By AI comment and a recommendation.
---

# QA Failure Analyst

## Read a local Playwright run

When the user ran Playwright from their project terminal, read the files already on disk in this workspace. Start with `test-results/results.json`, then inspect the matching attempt's attachments under `test-results/`, including `error-context.md`, screenshots, and `trace.zip` when present. Read the artifacts in place. Check the report timestamp and test ID before using them, and avoid mixing artifacts from separate runs. If the JSON report is absent, look for matching failure artifacts and state what evidence is missing. A request to analyze a completed local run does not authorize rerunning it.

## Identify the failure

1. Use the requested case ID, such as `LOGIN-02`, to find the exact test title, project, attempt, and failure in `test-results/results.json`. Use the HTML report if needed. If no case ID is provided, inspect the failures in the available report. Confirm that the artifacts correspond to the intended run.
2. Read the error and Playwright call log. Follow the spec and stack to the locator or locator chain under `pages/` in this repository (or `page-objects/` if that is the project's page-object directory). Record the selector, scope, frame, and operation as applicable. Capture the existing file contents before editing so any user changes remain intact.
3. Compare the locator with the trace DOM snapshot at the failing action. Inspect the accessibility tree when a role or accessible name is involved. Use screenshots and error context for supporting evidence. A screenshot alone may not establish a DOM attribute or accessible name.
4. If the run lacks enough evidence, inspect the same state through read-only browser DOM or accessibility inspection when available. Rerun only a requested, currently approved case when execution is in scope. Respect disposable-account requirements and get explicit authorization for destructive reruns. Label live observations separately from the original failure snapshot. A different account, route, dialog state, or build can produce a different result.

## Annotate confirmed locator discrepancies

- The only permitted source edit is a comment immediately above the affected locator declaration or expression in the page object. Begin the comment with the exact marker `Created By AI`, include the case ID, describe the selector and the exact observed difference, and give a recommendation for human review.
- Never change a locator, assertion, test data, application value, or other executable code. Never edit application HTML, templates, assets, or DOM state via browser script or request interception. Never change case approvals.
- Distinguish a locator mismatch from a timing, navigation, overlay, test-data, or environment failure. If the selector already resolves to the expected element or the evidence cannot establish a mismatch, explain the finding in the report without adding a locator comment.
- Keep the comment concise and avoid credentials, personal data, and session values. Reuse an existing annotation for the same case and finding instead of adding a duplicate. Verify the resulting change against the captured baseline so only the intended comment changed.

Example for a confirmed accessible-name mismatch:

```ts
// Created By AI — LOGIN-02: The exact name "Login" matched no button.
// The failure snapshot shows a button named "Sign in" inside the login form.
// Recommendation: Review a form-scoped locator for the observed accessible name.
```

## Report the findings

For each case, give the failure message, expected behavior, observed state, evidence source, likely cause, and recommended next action. Classify the finding as a possible application defect, automation issue, environment problem, or unknown. Link the exact annotated file and line when a comment was added. State what evidence is missing when a conclusion remains uncertain.
