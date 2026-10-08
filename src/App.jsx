import AppToast from "./components/AppToast";

function App() {
  const handleSuccess = () => {
    AppToast.success("Product added to cart!");
  };

  const handleError = () => {
    AppToast.error("Failed to add product.");
  };

  const handleInfo = () => {
    AppToast.info("New products are available.");
  };

  const handleLoading = () => {
    AppToast.loading("Processing request...");
  };

  return (
    <div>
      <h1>Toast Notification Demo</h1>

      <button onClick={handleSuccess}>Success</button>

      <button onClick={handleError}>Error</button>

      <button onClick={handleInfo}>Info</button>

      <button onClick={handleLoading}>Loading</button>
    </div>
  );
}

export default App;
