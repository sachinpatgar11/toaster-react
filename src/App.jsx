import AppToast from "./components/AppToast";
import { createProduct } from "./services/productService";
import "./App.css";

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
    <main className="app">
      <section className="toast-dashboard">
        <div className="dashboard-header">
          <div>
            <span className="eyebrow">UI COMPONENT</span>

            <h1>Toast Notifications</h1>

            <p>
              Trigger different types of notifications and see how they behave
              in a real React application.
            </p>
          </div>

          <div className="notification-icon">🔔</div>
        </div>

        <div className="divider" />

        <section className="section">
          <div className="section-heading">
            <h2>Product Actions</h2>

            <p>
              These actions demonstrate toast notifications triggered by
              application events.
            </p>
          </div>

          <div className="action-grid">
            <button
              className="action-button primary"
              onClick={handleCreateProduct}
            >
              <span className="button-icon">＋</span>

              <span>
                <strong>Create Product</strong>
                <small>Simulate an API request</small>
              </span>
            </button>
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <h2>Notification Types</h2>

            <p>
              Test the different notification states supported by the
              application.
            </p>
          </div>

          <div className="action-grid">
            <button className="action-button success" onClick={handleSuccess}>
              <span className="button-icon">✓</span>

              <span>
                <strong>Success</strong>
                <small>Successful operation</small>
              </span>
            </button>

            <button className="action-button error" onClick={handleError}>
              <span className="button-icon">!</span>

              <span>
                <strong>Error</strong>
                <small>Something went wrong</small>
              </span>
            </button>

            <button className="action-button info" onClick={handleInfo}>
              <span className="button-icon">i</span>

              <span>
                <strong>Information</strong>
                <small>General application update</small>
              </span>
            </button>

            <button className="action-button warning" onClick={handleLoading}>
              <span className="button-icon">◌</span>

              <span>
                <strong>Loading</strong>
                <small>Long-running operation</small>
              </span>
            </button>
          </div>
        </section>

        <div className="dashboard-footer">
          <div className="status">
            <span className="status-dot" />
            Toast system active
          </div>

          <button className="dismiss-button" onClick={handleDismissAll}>
            Dismiss all notifications
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
