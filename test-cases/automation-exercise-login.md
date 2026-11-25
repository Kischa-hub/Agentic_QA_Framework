# Automation Exercise login and logout test cases

Review against the [login requirement](../requirements/automation-exercise-login.md). Record approval decisions in [the JSON case file](automation-exercise-login.json).

Expected behavior follows the requirement and the published scenarios. These drafts are based on documentation. [Automation Exercise test cases 2–4](https://automationexercise.com/test_cases)

## LOGIN-01 · Sign in with valid credentials and delete the disposable account

**Criteria** 1, 2, 3 · **Type** positive · **Priority** high · **Status** `pending-review`

### Preconditions

- Start signed out on the Automation Exercise home page.
- Provision a disposable account for this run. Set AUTOMATION_EXERCISE_EMAIL and AUTOMATION_EXERCISE_PASSWORD to its valid credentials and record its expected display name.

### Steps

1. Select Signup / Login and verify that Login to your account is visible.
2. Enter the email and password from the environment variables listed above, then select Login.
3. Verify the header displays Logged in as followed by the expected account display name.
4. Select Delete Account for the verified disposable account.

**Expected result** The account deletion confirmation appears.

## LOGIN-02 · Reject an unregistered email and incorrect password

**Criteria** 4, 5 · **Type** negative · **Priority** high · **Status** `pending-review`

### Preconditions

- Start signed out on the Automation Exercise home page.
- Use a well-formed, unregistered test email. Set AUTOMATION_EXERCISE_INVALID_PASSWORD to a non-empty incorrect test password.

### Steps

1. Select Signup / Login and verify that Login to your account is visible.
2. Enter the unregistered email and the value of AUTOMATION_EXERCISE_INVALID_PASSWORD, then select Login.

**Expected result** The login form stays visible and displays `Your email or password is incorrect!`.

## LOGIN-03 · Log out of a signed-in session

**Criteria** 6, 7, 8 · **Type** positive · **Priority** high · **Status** `pending-review`

### Preconditions

- Start signed out on the Automation Exercise home page.
- Use an existing test account that is independent of the account deleted by LOGIN-01. Set AUTOMATION_EXERCISE_LOGOUT_EMAIL and AUTOMATION_EXERCISE_LOGOUT_PASSWORD to its valid credentials and record its expected display name.

### Steps

1. Select Signup / Login and verify that Login to your account is visible.
2. Enter the email and password from the environment variables listed above, then select Login.
3. Verify the header displays Logged in as followed by the expected account display name.
4. Select Logout.

**Expected result** The login page opens and the signed-in account name is absent from the header.

Blank and malformed input cases need defined expected behavior before drafting.
