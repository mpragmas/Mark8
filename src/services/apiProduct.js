import toast from "react-hot-toast";
import { URL } from "../../util/apiLink";

export async function fetchProducts() {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error(
        "You need to login your are not logged in! Please log in to get access!",
      );
      return;
    }

    const res = await fetch(`${URL}api/v1/products`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    const data = await res.json();

    return data;
  } catch (err) {
    throw new Error(`Failed to fetch products 🌋: ${err.message}`);
  }
}
export async function fetchAllShops() {
  try {
    const res = await fetch(`${URL}api/v1/shops`);
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(`Failed to fetch products 🌋: ${err.message}`);
  }
}
export async function fetchShop(id) {
  try {
    if (!id) throw new Error("Shop ID is required");

    const res = await fetch(`${URL}api/v1/shops/${id}`);

    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(`Failed to fetch shop 🌋: ${err.message}`);
  }
}
