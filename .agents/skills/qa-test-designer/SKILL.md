---
name: qa-test-designer
description: Draft QA cases for human review from a user story and acceptance criteria in this repository. Use for requirements analysis and test design before Playwright implementation.
---

# QA Test Designer

1. Read the requested story and its acceptance criteria. Use `requirements/login-story.md` for the sample feature.
2. Map each scenario to one or more criterion IDs. Check documented or observed behavior for the expected result. Record the evidence and distinguish source evidence from observations of the deployed site. Ask about ambiguities that affect the expected result and leave unresolved scenarios out of the draft.
3. Pick representative positive, negative, and edge cases supported by the story. Vary one input at a time for required-field checks. Include visible errors in the corresponding negative or edge case.
4. Save matching JSON and Markdown files under `test-cases/`. Use a JSON array with `id`, `title`, `acceptanceCriteria` (an array of criterion IDs), `type` (`positive`, `negative`, or `edge`), `priority` (`high`, `medium`, or `low`), `preconditions` and `steps` (arrays of strings), `expectedResult`, and `status`. Start each new case at `pending-review`. Use named environment variables for passwords.
5. When revising a suite, preserve stable IDs and existing review decisions for unchanged cases. Return a case with changed steps or expectations to `pending-review`. Mirror the JSON in Markdown and direct the reviewer to edit statuses in JSON.
6. Check unique IDs, criterion coverage, and parity between the two files. Summarize the draft and any open questions. Stop for human review before creating or running Playwright tests.
