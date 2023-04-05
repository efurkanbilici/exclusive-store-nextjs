import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "@/store/basketSlice";

export default configureStore({
  reducer: {
    basket: basketSlice,
  },
});
