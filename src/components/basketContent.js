import axios from "axios";
import { useEffect, useState } from "react";

import { Stack } from "@mui/material";
import Chip from "@mui/material/Chip";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Skeleton from "@mui/material/Skeleton";

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
        slug: `${process.env.NEXT_PUBLIC_BASE_URL}/item/${$data.id}`,
      };
    });
  };

  const setLs = async () => {
    setLoading(true);

    try {
      const data = await setLoadedData();
      localStorage.basket__state = JSON.stringify(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLs().then(() => {});
  }, []);

  if (loading) {
    return (
      <>
        {[...Array(3)].map((item, index) => (
          <div className="flex items-center justify-between p-4" key={index}>
            <Skeleton
              animation="wave"
              variant="circular"
              width={40}
              height={40}
            />
            <div className="flex flex-col gap-2">
              <Skeleton
                sx={{ height: 20, width: 140 }}
                animation="wave"
                variant="rectangular"
              />
              <Skeleton
                sx={{ height: 20, width: 140 }}
                animation="wave"
                variant="rectangular"
              />
            </div>
          </div>
        ))}
      </>
    );
  }

  const basketState = JSON.parse(localStorage?.basket__state);

  return (
    <Stack spacing={2}>
      {basketState?.map(({ itemId, count, title, price }) => (
        <div key={itemId} className="py-4 px-3">
          <div className="mb-2 flex items-start justify-start gap-2">
            <Chip
              label={count}
              color="primary"
              size="small"
              className="mt-0.5"
            />
            <div className="ml-1">
              <h4 className="font-bold text-[18px] text-slate-700 leading-5">
                {title}
              </h4>
              <div className="py-2">
                <span className="block text-xs text-slate-500 mb-1 leading-3">
                  Single Price: <b>{price.single}$</b>
                </span>
                {count > 1 && (
                  <span className="block text-xs text-slate-500 mb-1 leading-3">
                    Total Price: <b>{price.total}$</b>
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <ButtonGroup size="small" aria-label="item-counter">
              <Button key="decrease">-</Button>
              <Button disableRipple key="count">
                {count}
              </Button>
              <Button key="increase">+</Button>
            </ButtonGroup>
            <Button
              variant="outlined"
              startIcon={<DeleteIcon />}
              color="error"
              size="small"
            >
              Delete
            </Button>
          </div>
        </div>
      ))}
    </Stack>
  );
}
