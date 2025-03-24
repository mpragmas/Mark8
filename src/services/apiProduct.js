export async function fetchProducts() {
  try {
    const res = await fetch("http://localhost:5000/api/v1/products");
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(`Failed to fetch products 🌋: ${err.message}`);
  }
}
export async function fetchShop() {
  try {
    const res = await fetch("http://localhost:5000/api/v1/products");
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(`Failed to fetch products 🌋: ${err.message}`);
  }
}
