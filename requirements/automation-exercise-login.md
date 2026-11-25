# Automation Exercise login and logout

**Issue type** Feature

**Application** Automation Exercise

## Description

Let registered shoppers sign in and end their sessions, and show clear feedback when credentials are rejected.

## Test coverage

Draft one independent test case per scenario. Use the numbered acceptance criteria for traceability.

**Login user with correct email and password** (criteria 1–3)

As a registered shopper, I want to sign in so I can access my account.

Start signed out on the home page. Use an existing disposable account whose credentials and display name are known.


**Login user with incorrect email and password** (criteria 4–5)

As a shopper, I want clear feedback when sign-in fails so I can correct my credentials.

Start signed out on the home page. Use a well-formed, unregistered test email and a non-empty incorrect password.


**Logout user** (criteria 6–8)

As a signed-in shopper, I want to sign out so I can end my session.

Start signed out on the home page. Use an existing test account with known credentials and display name.


### Acceptance criteria

1- The shopper is signed out on the home page | The shopper selects **Signup / Login** | The login form is visible.
2- The login form is visible | The shopper submits the test account’s valid email and password | The header displays that account’s name as the signed-in user.
3- The disposable test account is signed in | The shopper selects **Delete Account** | The account deletion confirmation appears.
4- The shopper is signed out on the home page | The shopper selects **Signup / Login** | The login form is visible.
5- The login form is visible | The shopper submits the unregistered email and incorrect password | The form remains visible and displays `Your email or password is incorrect!`.
6- The shopper is signed out on the home page | The shopper selects **Signup / Login** | The login form is visible.
7- The login form is visible | The shopper submits the test account’s valid email and password | The header displays that account’s name as the signed-in user.
8- The header shows the signed-in account name | The shopper selects **Logout** | The login page opens and the signed-in account name is absent.
