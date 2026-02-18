import { createSlice } from "@reduxjs/toolkit";

const loadCart = () => {
  const data = localStorage.getItem("cart");
  return data ? JSON.parse(data) : [];
};

const saveCart = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: loadCart(),
  },
  reducers: {
    addToCart: (state, action) => {
      const existing = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      saveCart(state.items);
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
      saveCart(state.items);
    },

    increaseQty: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      item.quantity += 1;
      saveCart(state.items);
    },

    decreaseQty: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item.quantity > 1) {
        item.quantity -= 1;
      }
      saveCart(state.items);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
} = cartSlice.actions;

export default cartSlice.reducer;
