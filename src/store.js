import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./components/Cart/cartSlice";
import savedReducer from "./components/Products/savedSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    saved: savedReducer,
  },
});

export default store;
