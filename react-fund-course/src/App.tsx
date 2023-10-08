import CreatProduct from "./components/CreatProduct";
import ErrorMessage from "./components/ErrorMessage";
import Loader from "./components/Loader";
import Modal from "./components/Modal";
import Product from "./components/Product";
import { useRoducts } from "./hooks/products";

function App() {
  const { loading, error, products } = useRoducts();

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {error && <ErrorMessage error={error} />}
      {loading && <Loader />}
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
      <Modal title="Create new product">
        <CreatProduct />
      </Modal>
    </div>
  );
}

export default App;
