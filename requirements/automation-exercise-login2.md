# Automation Exercise login Feature

**Issue type** Feature

**Application** Automation Exercise

## Description

Let registered shoppers sign in and end their sessions, and show clear feedback when credentials are rejected.

## Test coverage

Draft one independent test case per scenario. Use the scenario ID for traceability and keep its acceptance criteria together as checkpoints. Older case drafts use the original criterion IDs, which match the suffixes within their scenario.


### Acceptance criteria

1-The shopper is signed out on the home page | The shopper selects **Signup / Login** | The login form is visible.
2-The login form is visible | The shopper submits the test account’s valid email and password | The header displays that account’s name as the signed-in user. |
3- The disposable test account is signed in | The shopper selects **Delete Account** | The account deletion confirmation appears. 
4- The shopper is signed out on the home page | The shopper selects **Signup / Login** | The login form is visible. 
5- The login form is visible | The shopper submits the unregistered email and incorrect password | The form remains visible and displays `Your email or password is incorrect!`.
6- The shopper is signed out on the home page | The shopper selects **Signup / Login** | The login form is visible. 
7- The login form is visible | The shopper submits the test account’s valid email and password | The header displays that account’s name as the signed-in user. 
8- The header shows the signed-in account name | The shopper selects **Logout** | The login page opens and the signed-in account name is absent. 
