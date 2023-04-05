import Skeleton from "@mui/material/Skeleton";
import PropTypes from "prop-types";
import { useDarkMode } from "@/lib/utils";

export const ProductsSkeleton = ({ numbers = 9 }) => {
  const darkMode = useDarkMode();

  var items = [...Array(numbers)];
  var color = {
    backgroundColor: darkMode ? "#b5b5b530" : "#ffffff21",
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row-dense grid-rows-auto gap-5">
      {items.map((_, index) => (
        <div
          className="grid grid-cols-3 grid-rows-1 gap-3 h-[135px] p-3 product-view"
          key={index}
        >
          <Skeleton
            variant="rounded"
            animation="wave"
            height="100%"
            className="product--image"
            style={color}
          />
          <div className="grid grid-rows-3 grid-cols-1 gap-2 product--content">
            <Skeleton variant="text" animation="wave" height={28} sx={color} />
            <Skeleton variant="text" animation="wave" height={42} sx={color} />
            <div className="flex items-center justify-between gap-4 mt-2">
              <Skeleton
                variant="text"
                animation="wave"
                className="flex-1 basis-0"
                height={30}
                sx={color}
              />
              <Skeleton
                variant="text"
                animation="wave"
                className="flex-1 basis-0"
                height={30}
                sx={color}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

ProductsSkeleton.propTypes = {
  numbers: PropTypes.number,
};
