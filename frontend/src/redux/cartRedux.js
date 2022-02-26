import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.totalPrice += action.payload.price;
    },
    updateProduct: (state, action) => {
      const product = action.payload.product;
      const item = state.products.find((e) => e.id === product.id);

      if (item) {
        if (Math.sign(action.payload.quantity) > 0) {
          item.quantity += action.payload.quantity;
          state.totalPrice += item.price;
        } else {
          if (item.quantity > 1) {
            item.quantity += action.payload.quantity;
            state.totalPrice -= item.price;
          } else {
            const newProducts = state.products.filter((e) => e.id !== product.id);
            state.products = newProducts;
            state.quantity -= 1;
            state.totalPrice -= product.price * product.quantity;
          }
        }
      }
    },
    deleteProduct: (state, action) => {
      const product = action.payload.product;
      const newProducts = state.products.filter((e) => e.id !== product.id);
      state.products = newProducts;
      state.quantity -= 1;
      state.totalPrice -= product.price * product.quantity;
    },
  },
});

export const { addProduct, updateProduct, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;
