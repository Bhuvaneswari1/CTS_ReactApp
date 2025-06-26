React Case Study: Product Inventory 

🎯 Objective:
Create a Product Inventory Welcome Page that loads as the default page and:

Fetches product data using a custom hook.
Displays loading and error states appropriately.
Renders a list of products using dedicated components.
🔧 Acceptance Criteria

✅ Use a custom hook useFetchProducts() to fetch product data from this external API:
👉 https://fakestoreapi.com/products
✅ Show a loading spinner while data is being fetched.
✅ Display an error message if the API call fails.
✅ Once the data is successfully fetched, render the product list using:
<ProductList />
<ProductCard />

🧩 Component Breakdown

1. App Component
Calls useFetchProducts() to get product data.
Based on the returned values:
Renders <LoadingSpinner /> if loading
Displays an error message if request fails
Shows <h1>Product Inventory</h1>
Renders <ProductList products={products} /> when data is loaded

2. LoadingSpinner Component
Simple component
<div>Loading...</div>

3. ErrorMessage Component
Simple component to show the error text

4. ProductList Component
Accepts products array as a prop
Maps over the array and renders one <ProductCard /> per product

5. ProductCard Component
Accepts image, title, and price props
Displays the following:
<img> – Product image
<h3> – Product title
<p> – Product price (e.g., $25.99)
Uses PropTypes to enforce prop type safety
