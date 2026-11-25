# Mini Agentic QA Framework

Use TypeScript and Playwright Test. Keep the workflow scoped to the automationexercise website.

The human owns approval. Draft cases start as `pending-review`. Implement and execute login tests only for currently approved cases. Return cases with changed steps or expectations to human review. Base expected behavior on the story and documented or observed evidence.

Keep credentials in environment variables. Preserve the application under test and investigate failures before proposing changes to test expectations.

## Playwright UI tests

Use Page Object Model. Keep page objects in `pages/` and reuse them across specs. Page objects take the built-in Playwright `Page` and own page-specific locators and reusable actions. Specs own approved scenario flows, test data, and acceptance assertions.
