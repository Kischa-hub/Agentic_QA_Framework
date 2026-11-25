# Shopping cart

**Issue type** Feature

**Application** Automation Exercise

## Description

Let shoppers manage selected products and verify their cart contents, including after signing in.

## Test coverage

Draft one independent test case per scenario. Use the numbered acceptance criteria for traceability.

**Add products to the cart** (criteria 1–3)

As a shopper, I want to add multiple products so I can check their quantities and prices together.

Start on the home page with an empty cart. Use the first two distinct products in the catalog and record their listed unit prices.

[Automation Exercise test case 12](https://automationexercise.com/test_cases)

**Remove products from the cart** (criteria 4–5)

As a shopper, I want to remove an unwanted item so I can buy only the products I intend to keep.

Start on the home page with an empty cart. Choose two distinct products and identify the one to remove.

[Automation Exercise test case 17](https://automationexercise.com/test_cases)

**Verify product quantity in the cart** (criteria 6–7)

As a shopper, I want the cart to reflect the quantity I chose so I can order the right number of units.

Start on the home page with an empty cart. Choose any product visible on the home page.

[Automation Exercise test case 13](https://automationexercise.com/test_cases)

**Add to cart from Recommended Items** (criteria 8–9)

As a shopper, I want to add a recommended product directly to my cart so I can keep shopping from the home page.

Start on the home page with an empty cart. Record which recommended product you add.

[Automation Exercise test case 22](https://automationexercise.com/test_cases)

**Search products and verify the cart after login** (criteria 10–13)

As a returning shopper, I want products added before sign-in to stay in my cart so I can continue shopping after signing in.

Start signed out on the home page with an empty cart and a test account with known credentials. Choose a product name with a known, non-empty result set.

[Automation Exercise test case 20](https://automationexercise.com/test_cases)

### Acceptance criteria

1- The home page is open | The shopper selects **Products** | The **All Products** page opens and displays product cards.
2- The catalog is visible | The shopper hovers over the first product, selects **Add to cart**, then selects **Continue Shopping** | The catalog is available for the next selection.
3- The shopper has added the first product once | The shopper hovers over the second product, selects **Add to cart** once, then selects **View Cart** | The cart has one row per chosen product. Each row shows quantity 1 and the catalog unit price. Each line total equals its unit price multiplied by its quantity.
4- The shopper has added the test products | The shopper selects **Cart** | The cart opens and lists the selected products.
5- The cart shows both products | The shopper selects the **X** control in the target product’s row | The target product is absent from the cart and the other product is still listed.
6- The chosen product appears on the home page | The shopper selects its **View Product** link | The detail page opens for that product.
7- The product detail page is open | The shopper sets quantity to 4, selects **Add to cart**, then selects **View Cart** | The cart lists the chosen product with quantity 4.
8- The home page is open | The shopper scrolls to the bottom area | The **Recommended Items** section and its product cards are visible.
9- A recommended product is visible | The shopper selects its **Add to cart** control and then selects **View Cart** | The cart displays the selected recommended product.
10- The home page is open | The shopper selects **Products** | The **All Products** page opens and displays product cards.
11- The **All Products** page is open | The shopper submits the chosen product name through search | **Searched Products** is visible and the displayed product cards match the expected result set.
12- The expected search results are visible | The shopper adds each matching product and opens **Cart** | The cart lists every product added from search.
13- The guest cart lists the recorded products | The shopper signs in through **Signup / Login** and reopens **Cart** | The cart still lists every product recorded before sign-in.
