# SauceDemo login

**Issue type** Feature

**Application** SauceDemo

## Description

Let SauceDemo users sign in to view the inventory and show feedback when credentials are invalid or incomplete.

## User story

As a SauceDemo user, I want to sign in with my demo account so I can reach the product inventory.

## Preconditions

Start each scenario signed out. Use SauceDemo's public standard demo account and supply its password through `SAUCEDEMO_PASSWORD`.

## Acceptance criteria

| ID | Given | When | Then |
| --- | --- | --- | --- |
| AC-01 | The login form is open | The user submits valid standard demo credentials | The inventory page opens at `/inventory.html`. |
| AC-02 | The login form is open | The user submits a valid demo username with an incorrect, non-empty password | The login form remains visible and shows `Epic sadface: Username and password do not match any user in this service`. |
| AC-03 | The login form is open | The user submits a blank username with the valid demo password | The login form remains visible and shows `Epic sadface: Username is required`. |
| AC-04 | The login form is open | The user submits the valid demo username with a blank password | The login form remains visible and shows `Epic sadface: Password is required`. |

Sauce Labs documents the inventory destination. The upstream login source supplies the validation messages and prefix. The hosted login behavior still needs confirmation in Playwright. [Sauce Labs login example](https://docs.saucelabs.com/web-apps/automated-testing/selenium/sample-scripts/) · [SauceDemo login source](https://github.com/saucelabs/sample-app-web/blob/main/src/pages/Login.jsx)

The invalid-credentials case uses one representative mismatch. The required-field cases each leave one field blank so the result has a single cause. Each failure criterion covers its visible error in the same scenario.
