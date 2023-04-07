import { Stack } from "@mui/material";
import Chip from "@mui/material/Chip";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

export default function BasketContent({ items }) {
  return (
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
                  Single Price: <b>{price}$</b>
                </span>
                {count > 1 && (
                  <span className="block text-xs text-slate-500 mb-1 leading-3">
                    Total Price: <b>{totalPrice}$</b>
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
