import { useState } from "react";
import CreatProduct from "./components/CreatProduct";
import ErrorMessage from "./components/ErrorMessage";
import Loader from "./components/Loader";
import Modal from "./components/Modal";
import Product from "./components/Product";
import { useRoducts } from "./hooks/products";
import { IProduct } from "./models";

function App() {
  const { loading, error, products, addProduct } = useRoducts();
  const [modal, setModal] = useState(false);

  const createHandler = (product: IProduct) => {
    setModal(false);
    addProduct(product);
  };

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {error && <ErrorMessage error={error} />}
      {loading && <Loader />}
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
      {modal && (
        <Modal title="Create new product" onClose={() => setModal(false)}>
          <CreatProduct onCreate={createHandler} />
        </Modal>
      )}

      <button
        className="fixed bottom-5 right-5 rounded-full bg-red-500 text-white text-2xl px-4 py-2"
        onClick={() => setModal(true)}
      >
        +
      </button>
    </div>
  );
}

export default App;
