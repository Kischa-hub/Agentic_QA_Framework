# Checkout and invoices

**Issue type** Feature

**Application** Automation Exercise

## Description

Let shoppers place orders through the supported account flows, review checkout details, and download an invoice after purchase.

## Test coverage

Draft one independent test case per scenario. Use the numbered acceptance criteria for traceability.

**Place order by registering before checkout** (criteria 1–9)

As a new shopper, I want to register before shopping so I can check out with my new account.

Use an unused test email to create a disposable account, known products, a test order comment, and synthetic payment data. Start signed out with an empty cart.

[Automation Exercise test case 15](https://automationexercise.com/test_cases)

**Place order by registering during checkout** (criteria 10–19)

As a guest shopper, I want to register during checkout so I can complete the purchase with the items I already selected.

Use an unused test email to create a disposable account, known products, a test order comment, and synthetic payment data. Start signed out with an empty cart.

[Automation Exercise test case 14](https://automationexercise.com/test_cases)

**Place order by signing in before checkout** (criteria 20–27)

As a returning shopper, I want to sign in before shopping so I can check out with my existing account.

Use a disposable test account, known products, a test order comment, and synthetic payment data. Start signed out with an empty cart. Set up the account before opening the home page.

[Automation Exercise test case 16](https://automationexercise.com/test_cases)

**Verify address details on the checkout page** (criteria 28–34)

As a registered shopper, I want checkout to show the address I supplied at signup so I can verify where my order will be sent and billed.

Start signed out on the home page with an empty cart and an unused test email. Record the recipient name, company, both address lines, city, state, postal code, country, and mobile number entered at registration.

[Automation Exercise test case 23](https://automationexercise.com/test_cases)

**Download invoice after purchase** (criteria 35–46)

As a shopper, I want to download an invoice after checkout so I can keep a record of the purchase.

Use an unused test email to create a disposable account, known products, a test order comment, and synthetic payment data. Start signed out with an empty cart.

[Automation Exercise test case 24](https://automationexercise.com/test_cases)

### Acceptance criteria

1- The signed-out shopper is on the home page | The shopper selects **Signup / Login** | The signup form is available.
2- The signup page is open | The shopper submits a new name and email, then completes the account and address forms and selects **Create Account** | The account creation confirmation appears.
3- The account creation confirmation is visible | The shopper selects **Continue** | The header displays the name used at signup as the signed-in user.
4- The newly registered shopper has added the test products | The shopper selects **Cart** | The cart opens and lists the selected products.
5- The signed-in shopper’s cart shows the selected products | The shopper selects **Proceed To Checkout** | Checkout displays **Address Details** and **Review Your Order**, and the review lists the products from the cart.
6- The checkout review is visible | The shopper enters an order comment and selects **Place Order** | Payment fields appear for cardholder name, card number, CVC, and expiry month and year.
7- The payment form is open | The shopper enters valid test card details and selects **Pay and Confirm Order** | The site confirms that the order was placed successfully.
8- The disposable test account is signed in | The shopper selects **Delete Account** | The account deletion confirmation appears.
9- The account deletion confirmation is visible | The shopper selects **Continue** | The storefront opens in a signed-out state.
10- The signed-out shopper has added the test products | The shopper selects **Cart** | The cart opens and lists the selected products.
11- The signed-out shopper’s cart contains products | The shopper selects **Proceed To Checkout**, then **Register / Login** | The signup and login page opens.
12- The signup page is open | The shopper submits a new name and email, then completes the account and address forms and selects **Create Account** | The account creation confirmation appears.
13- The account creation confirmation is visible | The shopper selects **Continue** | The header displays the name used at signup as the signed-in user.
14- The newly registered shopper is signed in | The shopper reopens **Cart** | The cart lists the products added before registration.
15- The signed-in shopper’s cart shows the selected products | The shopper selects **Proceed To Checkout** | Checkout displays **Address Details** and **Review Your Order**, and the review lists the products from the cart.
16- The checkout review is visible | The shopper enters an order comment and selects **Place Order** | Payment fields appear for cardholder name, card number, CVC, and expiry month and year.
17- The payment form is open | The shopper enters valid test card details and selects **Pay and Confirm Order** | The site confirms that the order was placed successfully.
18- The disposable test account is signed in | The shopper selects **Delete Account** | The account deletion confirmation appears.
19- The account deletion confirmation is visible | The shopper selects **Continue** | The storefront opens in a signed-out state.
20- The signed-out shopper is on the home page | The shopper selects **Signup / Login** | The login form is available.
21- The login form is visible | The shopper submits the test account’s valid email and password | The header displays that account’s name as the signed-in user.
22- The returning shopper has signed in and added the test products | The shopper selects **Cart** | The cart opens and lists the selected products.
23- The signed-in shopper’s cart shows the selected products | The shopper selects **Proceed To Checkout** | Checkout displays **Address Details** and **Review Your Order**, and the review lists the products from the cart.
24- The checkout review is visible | The shopper enters an order comment and selects **Place Order** | Payment fields appear for cardholder name, card number, CVC, and expiry month and year.
25- The payment form is open | The shopper enters valid test card details and selects **Pay and Confirm Order** | The site confirms that the order was placed successfully.
26- The disposable test account is signed in | The shopper selects **Delete Account** | The account deletion confirmation appears.
27- The account deletion confirmation is visible | The shopper selects **Continue** | The storefront opens in a signed-out state.
28- The signed-out shopper is on the home page | The shopper selects **Signup / Login** | The signup form is available.
29- The signup page is open | The shopper submits a new name and email, then completes the account and address forms and selects **Create Account** | The account creation confirmation appears.
30- The account creation confirmation is visible | The shopper selects **Continue** | The header displays the name used at signup as the signed-in user.
31- The shopper has added the test products | The shopper selects **Cart** | The cart opens and lists the selected products.
32- The signed-in shopper has a populated cart | The shopper selects **Proceed To Checkout** | Both the delivery address and the billing address show the corresponding values recorded at registration.
33- The disposable test account is signed in | The shopper selects **Delete Account** | The account deletion confirmation appears.
34- The account deletion confirmation is visible | The shopper selects **Continue** | The storefront opens in a signed-out state.
35- The signed-out shopper has added the test products | The shopper selects **Cart** | The cart opens and lists the selected products.
36- The signed-out shopper’s cart contains products | The shopper selects **Proceed To Checkout**, then **Register / Login** | The signup and login page opens.
37- The signup page is open | The shopper submits a new name and email, then completes the account and address forms and selects **Create Account** | The account creation confirmation appears.
38- The account creation confirmation is visible | The shopper selects **Continue** | The header displays the name used at signup as the signed-in user.
39- The newly registered shopper is signed in | The shopper reopens **Cart** | The cart lists the products added before registration.
40- The signed-in shopper’s cart shows the selected products | The shopper selects **Proceed To Checkout** | Checkout displays **Address Details** and **Review Your Order**, and the review lists the products from the cart.
41- The checkout review is visible | The shopper enters an order comment and selects **Place Order** | Payment fields appear for cardholder name, card number, CVC, and expiry month and year.
42- The payment form is open | The shopper enters valid test card details and selects **Pay and Confirm Order** | The site confirms that the order was placed successfully.
43- The successful order screen is open | The shopper selects **Download Invoice** | An invoice file downloads successfully.
44- The invoice download has completed | The shopper selects **Continue** on the order screen | The storefront opens with the shopper still signed in.
45- The disposable test account is signed in | The shopper selects **Delete Account** | The account deletion confirmation appears.
46- The account deletion confirmation is visible | The shopper selects **Continue** | The storefront opens in a signed-out state.
