# Product discovery

**Issue type** Feature

**Application** Automation Exercise

## Description

Let shoppers find and inspect products through the catalog, search, categories, and brands.

## Test coverage

Draft one independent test case per scenario. Use the numbered acceptance criteria for traceability.

**Verify All Products and product detail page** (criteria 1–2)

As a shopper, I want to browse the catalog and inspect a product so I can decide whether to buy it.

Start on the home page. Use the first product shown in the catalog.

[Automation Exercise test case 8](https://automationexercise.com/test_cases)

**Search product** (criteria 3–4)

As a shopper, I want to search by product name so I can find matching products.

Start on the home page. Choose a product name that yields results and identify the expected matching catalog products before submitting the search.

[Automation Exercise test case 9](https://automationexercise.com/test_cases)

**View category products** (criteria 5–7)

As a shopper, I want to browse product categories so I can narrow the catalog to the type of item I need.

Start on the home page. Use Women → Tops, then choose an available Men subcategory from the sidebar.

[Automation Exercise test case 18](https://automationexercise.com/test_cases)

**View & Cart Brand Products** (criteria 8–10)

As a shopper, I want to switch between brands so I can browse the products each brand offers.

Start on the home page. Choose two different brands listed in the Products sidebar.

[Automation Exercise test case 19](https://automationexercise.com/test_cases)

### Acceptance criteria

1- The home page is open | The shopper selects **Products** | The **All Products** page opens and displays product cards.
2- The catalog is visible | The shopper selects **View Product** on the first card | The detail page opens for that product and shows its name, category, price, availability, condition, and brand.
3- The home page is open | The shopper selects **Products** | The **All Products** page opens and displays product cards.
4- The **All Products** page is open | The shopper submits the chosen product name through search | **Searched Products** is visible and the displayed product cards match the expected result set.
5- The home page is open | The shopper looks at the left sidebar | The **Category** section is visible with **Women** and **Men** entries.
6- The category sidebar is visible | The shopper expands **Women** and selects **Tops** | The Women’s Tops page opens with the corresponding category heading.
7- The Women’s Tops page is open | The shopper expands **Men** and selects the chosen subcategory | The selected Men category page opens with a heading for that subcategory.
8- The home page is open | The shopper selects **Products** | The catalog opens with a visible **Brands** section in the left sidebar.
9- The **Brands** section is visible | The shopper selects the first chosen brand | That brand’s page opens and displays its products.
10- The first brand page is open | The shopper selects the second chosen brand in the sidebar | The second brand’s page opens and displays that brand’s products.
