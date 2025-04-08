import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((it) => it.itemId !== action.payload);
    },
    increaseQuantity(state, action) {
      const item = state.cart.find((it) => it.itemId === action.payload);
      item.quantity++;
      item.totalPrice =
        (item.discountPrice ? item.discountPrice : item.price) * item.quantity;
    },
    decreaseQuantity(state, action) {
      const item = state.cart.find((it) => it.itemId === action.payload);
      item.quantity--;
      item.totalPrice =
        (item.discountPrice ? item.discountPrice : item.price) * item.quantity;
      if (item.quantity === 0) {
        state.cart = state.cart.filter((it) => it.itemId !== action.payload);
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart?.cart;
