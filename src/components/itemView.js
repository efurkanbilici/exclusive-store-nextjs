import PropTypes from "prop-types";
import Image from "next/image";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/AddShoppingCart";

export default function ItemView({ imgSrc, title, desc }) {
  return (
    <div className="grid grid-cols-3 grid-rows-1 gap-3 h-max bg-gray-100 dark:bg-slate-700/20 w-full border border-blue-800 p-3 rounded product-view">
      <div className="relative w-full h-full product--image">
        <Image
          src={imgSrc}
          alt="product_icon"
          className="object-contain"
          sizes="(max-width: 768px) 10vw,
              (max-width: 1200px) 12vw,
              14vw"
          priority
          fill
        />
      </div>
      <div className="flex flex-col justify-between gap-3 w-full product--content">
        <h3 className="font-bold text-xl leading-5 h-max py-1 text-slate-700 dark:text-slate-300 tracking-tighter whitespace-nowrap overflow-hidden text-ellipsis">
          {title}
        </h3>
        <p className="text-slate-500 dark:text-slate-500 text-xs hidden overflow-hidden text-ellipsis viewbox-desc">
          {desc}
        </p>
        <div className="flex items-center justify-between gap-4 mt-2 flex-col md:flex-row">
          <Button
            size="small"
            variant="contained"
            startIcon={<AddIcon />}
            className="flex-1 basis-0 bg-[#1976d2] whitespace-nowrap w-full md:w-max"
          >
            Add Item
          </Button>
          <Button size="small" className="w-full md:w-max">
            See details
          </Button>
        </div>
      </div>
    </div>
  );
}

ItemView.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
