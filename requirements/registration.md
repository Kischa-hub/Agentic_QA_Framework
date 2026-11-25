# Automation Exercise registration

**Issue type** Feature

**Application** Automation Exercise

## Description

Let new shoppers create accounts and show clear feedback when an email is already registered.

## Test coverage

Draft one independent test case per scenario. Use the numbered acceptance criteria for traceability.

**Register user** (criteria 1–6)

As a new shopper, I want to create an account so I can use the storefront as a signed-in customer.

Start signed out on the home page with an unused test email. Prepare an account title, password, date of birth, first and last name, company, both address lines, country, state, city, postal code, and mobile number.

[Automation Exercise test case 1](https://automationexercise.com/test_cases)

**Register user with existing email** (criteria 7–8)

As a shopper, I want to know when an email is already registered so I can use the existing account.

Start signed out on the home page. Prepare a display name and an email already associated with a test account.

[Automation Exercise test case 5](https://automationexercise.com/test_cases)

### Acceptance criteria

1- Home is open in a signed-out session | The shopper selects **Signup / Login** | The signup form is visible.
2- The signup form is visible | The shopper submits a name and unused email | The account information form opens.
3- The account information form is open | The shopper completes the account and address details, selects both newsletter and partner-offer checkboxes, and selects **Create Account** | The account creation confirmation appears.
4- The account creation confirmation is visible | The shopper selects **Continue** | The header displays the name used at signup as the signed-in user.
5- The disposable test account is signed in | The shopper selects **Delete Account** | The account deletion confirmation appears.
6- The account deletion confirmation is visible | The shopper selects **Continue** | The storefront opens in a signed-out state.
7- The shopper is signed out on the home page | The shopper selects **Signup / Login** | The signup form is visible.
8- The signup form is visible | The shopper submits the name and registered email | The signup form stays visible and displays `Email Address already exist!`.
