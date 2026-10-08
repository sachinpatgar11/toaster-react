const API_URL = "https://dummyjson.com/products";

export async function createProduct(product) {
  const response = await fetch(`${API_URL}/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  if (!response.ok) {
    throw new Error("Unable to create product");
  }

  return response.json();
}
