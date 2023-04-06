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
      const getRelated = items.filter(({ itemId }) => itemId === productId);

      if (getRelated.length === 0) {
        items.push({ itemId: productId, count: 1 });
      } else {
        let refObj = getRelated[0];
        refObj.count += amount;
        const withoutCurrItem = items.filter(
          ({ itemId }) => itemId !== productId
        );

        items = [...withoutCurrItem, refObj];
      }
    },
  },
});

export const { addNewItem } = basketSlice.actions;

export default basketSlice.reducer;
