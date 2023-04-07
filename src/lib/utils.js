import { useEffect, useState } from "react";
import store from "@/store";
import { addNewItem } from "@/store/basketSlice";
import toast from "react-hot-toast";

export const fetcher = async (url) => {
  const res = await fetch(url);
  return await res.json();
};

export const useDarkMode = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const { matches } = mediaQuery;
    setDark(matches);

    const handleChange = ({ matches }) => setDark(matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return dark;
};

export const handleAddItem = ({ productId, amount, title, price }) => {
  store.dispatch(
    addNewItem({
      productId,
      amount,
      title,
      price,
    })
  );
  toast.success("Item added successfully!");
};
