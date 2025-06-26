import LoadingSpinner from "./components/LoadingSpinner";
import ProductList from "./components/ProductList";
import useFetchProducts from "./hooks/useFetchProducts";

function App() {
  const {products, loading, error} = useFetchProducts();
  return (
    <div style={{padding: '28px'}}>
      <h1>Product Inventory</h1>
      {loading && <LoadingSpinner />}
      {error && <div>Error fetching products: {error.message}</div>}
      {!loading && !error && <ProductList products={products} />}
    </div>
  );
}

export default App;
