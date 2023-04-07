import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";
import { handleAddItem, useDarkMode } from "@/lib/utils";

import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material";
import AddIcon from "@mui/icons-material/AddShoppingCart";

export default function ItemView({
  imgSrc,
  title,
  desc,
  rating,
  category,
  price,
  productId,
}) {
  const darkMode = useDarkMode();

  const StyledRating = styled(Rating)({
    "& .MuiRating-decimal": {
      color: "rgb(2 132 199)",
    },
    "& .MuiRating-iconEmpty": {
      color: darkMode ? "rgba(255,255,255,.45)" : "rgba(0,0,0,.45)",
    },
  });

  return (
    <div className="grid grid-cols-3 grid-rows-1 gap-3 bg-gray-100 dark:bg-slate-700/20 w-full border border-blue-800 p-3 rounded product-view">
      <div className="relative w-full h-full product--image">
        <Image
          src={imgSrc}
          alt="product_icon"
          className="object-contain"
          sizes="(max-width: 768px) 10vw,
              (max-width: 1200px) 12vw,
              14vw"
          priority={false}
          fill
        />
      </div>
      <div className="flex flex-col justify-between gap-3 w-full product--content">
        <div className="mt-2">
          <h3 className="font-bold text-xl leading-5 h-max py-1 text-slate-700 dark:text-slate-300 tracking-tighter whitespace-nowrap overflow-hidden text-ellipsis">
            {title}
          </h3>
          <p className="text-slate-500 dark:text-slate-500 text-xs hidden overflow-hidden text-ellipsis mt-2 viewbox-desc">
            {desc}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <StyledRating
              name={`Votes (${rating?.count})`}
              value={rating?.rate}
              precision={0.5}
              size="small"
              readOnly
            />
          </div>
          <div className="flex items-center justify-start">
            <span className="font-semibold text-blue-700 text-xl mr-4 dark:text-blue-300">
              {price}$
            </span>
            <Chip label={category} variant="outlined" size="small" />
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 mt-2 flex-col md:flex-row">
          <Button
            size="small"
            variant="contained"
            startIcon={<AddIcon />}
            className="flex-1 basis-0 bg-[#1976d2] whitespace-nowrap w-full md:w-max"
            onClick={() =>
              handleAddItem({
                productId,
                amount: 1,
                title,
                price,
              })
            }
          >
            Add Item
          </Button>
          <Link href={`/item/${productId}`}>
            <Button size="small" className="w-full md:w-max">
              See details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

ItemView.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  rating: PropTypes.object.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  productId: PropTypes.number.isRequired,
};
