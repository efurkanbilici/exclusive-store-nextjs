import { useEffect, useState } from "react";

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
