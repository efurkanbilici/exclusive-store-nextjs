import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addNewItem: ({ items }, { payload }) => {
      const { productId, amount } = payload;
      const itemIndex = items.findIndex((item) => item.itemId === productId);

      if (itemIndex === -1) {
        items.push({ itemId: productId, count: amount });
      } else {
        items[itemIndex].count += amount;
      }
    },
    updateItemCount: ({ items }, { payload }) => {
      const { productId, amount, type } = payload;
      const itemIndex = items.findIndex((item) => item.itemId === productId);

      if (itemIndex === -1) {
        items.push({
          itemId: productId,
          count: amount,
        });
      } else {
        items[itemIndex].count += type === 1 ? -amount : amount;
      }
    },
  },
});

export const { addNewItem, updateItemCount } = basketSlice.actions;

export default basketSlice.reducer;
