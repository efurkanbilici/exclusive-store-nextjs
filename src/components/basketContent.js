import axios from "axios";
import { useState } from "react";

export default function BasketContent({ items }) {
  const [loading, setLoading] = useState(true);

  const fetchToApi = async (itemId) => {
    try {
      return (
        await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products/${itemId}`)
      ).data;
    } catch (err) {
      console.error(err);
    }
  };

  const loadBasketData = async () => {
    const data = [];

    for (const { itemId } of items) {
      const itemData = await fetchToApi(itemId);
      data.push({
        $data: itemData,
        id: itemId,
      });
    }

    return data;
  };

  const setLoadedData = async () => {
    const arr = await loadBasketData();

    return items.map((item) => {
      const { $data } = arr.find((i) => i.id === item.itemId);
      return {
        ...item,
        title: $data.title,
        price: {
          single: $data.price,
          total: $data.price * item.count,
        },
        slug: `${process.env.NEXT_PUBLIC_API_URL}/products/${$data.id}`,
      };
    });
  };

  setLoadedData()
    .then((__data) => {
      console.log(__data);
    })
    .finally(() => setLoading(false));

  return <>Basket is {loading ? "" : "not"} empty</>;
}
