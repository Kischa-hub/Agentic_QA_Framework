# Page navigation

**Issue type** Feature

**Application** Automation Exercise

## Description

Let visitors open the Test Cases page and navigate back to the top of the home page.

## Test coverage

Draft one independent test case per scenario. Use the numbered acceptance criteria for traceability.

**Verify Test Cases page** (criteria 1)

As an automation learner, I want to open the Test Cases page so I can find practice scenarios.

Start on the Automation Exercise home page.

[Automation Exercise test case 7](https://automationexercise.com/test_cases)

**Scroll down and return to the top using the arrow** (criteria 2–3)

As a visitor, I want a back-to-top arrow so I can return from the footer to the main banner in one action.

Open the home page at the top. Use a viewport that requires scrolling to reach the footer.

[Automation Exercise test case 25](https://automationexercise.com/test_cases)

**Scroll down and return to the top manually** (criteria 4–5)

As a visitor, I want to scroll back to the top manually so I can revisit the main banner using my usual scroll controls.

Open the home page at the top. Use a viewport that requires scrolling to reach the footer.

[Automation Exercise test case 26](https://automationexercise.com/test_cases)

### Acceptance criteria

1- The home page is open | The visitor selects **Test Cases** | The page opens at `/test_cases` and the test case list is visible.
2- The page is open | The shopper scrolls to the footer | The **Subscription** heading is visible in the viewport.
3- The subscription footer and bottom-right back-to-top arrow are visible | The visitor selects the back-to-top arrow | The page returns to the top and the home banner text `Full-Fledged practice website for Automation Engineers` is visible in the viewport.
4- The page is open | The shopper scrolls to the footer | The **Subscription** heading is visible in the viewport.
5- The subscription footer is visible | The visitor manually scrolls back to the top | The page returns to the top and the home banner text `Full-Fledged practice website for Automation Engineers` is visible in the viewport.
