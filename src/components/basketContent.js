import { Stack } from "@mui/material";
import Chip from "@mui/material/Chip";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import store from "@/store";
import { deleteItem, updateItemCount } from "@/store/basketSlice";
import { Fragment } from "react";
import { Divider } from "@mui/joy";
import JoyUiButton from "@mui/joy/Button";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { useTranslation } from "next-i18next";

export default function BasketContent({ items }) {
  const totalPrice = items.reduce((acc, val) => {
    acc += val?.totalPrice ?? val.price;
    return acc;
  }, 0);

  const handleCheckout = () => {
    alert("going to stripe..");
  };

  const { t } = useTranslation("common");

  return (
    <Fragment>
      <Stack spacing={2}>
        {items.map(({ itemId, count, title, price, totalPrice }) => (
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
                    {`${t("SINGLE_PRODUCT_PRICE")}:`} <b>{price}$</b>
                  </span>
                  {count > 1 && (
                    <span className="block text-xs text-slate-500 mb-1 leading-3">
                      {`${t("TOTAL_PRODUCT_PRICE")}:`} <b>{totalPrice}$</b>
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <ButtonGroup size="small" aria-label="item-counter">
                <Button
                  key="decrease"
                  onClick={() => {
                    store.dispatch(
                      updateItemCount({
                        productId: itemId,
                        amount: 1,
                        type: 1,
                      })
                    );
                  }}
                >
                  -
                </Button>
                <Button disableRipple key="count">
                  {count}
                </Button>
                <Button
                  key="increase"
                  onClick={() => {
                    store.dispatch(
                      updateItemCount({
                        productId: itemId,
                        amount: 1,
                        type: 2,
                      })
                    );
                  }}
                >
                  +
                </Button>
              </ButtonGroup>
              <Button
                variant="outlined"
                startIcon={<DeleteIcon />}
                color="error"
                size="small"
                onClick={() => {
                  store.dispatch(
                    deleteItem({
                      productId: itemId,
                    })
                  );
                }}
              >
                {t("DELETE_ITEM_LABEL")}
              </Button>
            </div>
          </div>
        ))}
      </Stack>
      <Divider className="my-4">{t("CHECKOUT_LABEL")}</Divider>
      <div className="py-1 px-3 text-xs">
        <div className="pb-2">{`${t("SHIPPING_COST_LABEL")}:`} 5$</div>
        <div className="pb-2">
          {`${t("TOTAL_PRODUCT_PRICE")}:`}{" "}
          <b className="text-blue-700">{totalPrice + 5}$</b>
        </div>
        <JoyUiButton
          variant="soft"
          endDecorator={<KeyboardArrowRight />}
          className="w-full bg-black text-white hover:text-blue-950 mt-2"
          onClick={handleCheckout}
        >
          {t("CHECKOUT_LABEL")}
        </JoyUiButton>
      </div>
    </Fragment>
  );
}
