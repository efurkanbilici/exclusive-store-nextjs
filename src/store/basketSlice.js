import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addNewItem: ({ items }, { payload }) => {
      const { productId, amount, title, price } = payload;
      const itemIndex = items.findIndex((item) => item.itemId === productId);

      if (itemIndex === -1) {
        items.push({ itemId: productId, count: amount, title, price });
      } else {
        const existingItem = items[itemIndex];

        existingItem.count += amount;
        existingItem.totalPrice = existingItem.count * price;
      }
    },
    updateItemCount: (state, { payload }) => {
      const { productId, amount, type } = payload;
      const itemIndex = state.items.findIndex(
        (item) => item.itemId === productId
      );

      if (itemIndex === -1) {
        state.items.push({
          itemId: productId,
          count: amount,
        });
      } else {
        const updateItem = state.items[itemIndex];

        if (type === 1 && updateItem.count === 1) {
          state.items = state.items.filter((item) => item.itemId !== productId);
        } else {
          updateItem.count += type === 1 ? -amount : amount;
          updateItem.totalPrice = updateItem.count * updateItem.price;
        }
      }
    },
    deleteItem: (state, { payload }) => {
      state.items = state.items.filter(
        (item) => item.itemId !== payload.productId
      );
    },
  },
});

export const { addNewItem, updateItemCount, deleteItem } = basketSlice.actions;

export default basketSlice.reducer;
