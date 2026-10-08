import AppToast from "./components/AppToast";
import { createProduct } from "./services/productService";

function App() {
  const handleCreateProduct = () => {
    const product = {
      title: "React Product",
      price: 99,
    };

    AppToast.promise(createProduct(product), {
      loading: "Creating product...",
      success: "Product created successfully!",
      error: "Unable to create product.",
    });
  };

  const handleSuccess = () => {
    AppToast.success("Operation completed successfully!");
  };

  const handleError = () => {
    AppToast.error("Something went wrong!");
  };

  const handleInfo = () => {
    AppToast.info("New products are available.");
  };

  const handleLoading = () => {
    AppToast.loading("Processing your request...");
  };

  const handleDismissAll = () => {
    AppToast.dismissAll();
  };

  return (
    <div className="app">
      <h1>React Toast Notification</h1>

      <div className="toast-actions">
        <button onClick={handleCreateProduct}>Create Product</button>

        <button onClick={handleSuccess}>Success</button>

        <button onClick={handleError}>Error</button>

        <button onClick={handleInfo}>Info</button>

        <button onClick={handleLoading}>Loading</button>

        <button onClick={handleDismissAll}>Dismiss All</button>
      </div>
    </div>
  );
}

export default App;
