import { Lora, Roboto_Mono } from "next/font/google";
import { Fragment, useState } from "react";
import Link from "next/link";

import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import BasketIcon from "@mui/icons-material/ShoppingBasket";
import NoItemIcon from "@mui/icons-material/RemoveShoppingCart";

const headingFont = Lora({
  subsets: ["latin"],
});

const monoFont = Roboto_Mono({
  subsets: ["latin"],
});

export default function Navbar() {
  const [isBasketOpen, setIsBasketOpen] = useState(false);

  return (
    <Fragment>
      <div className="fixed top-0 left-0 w-full h-14 bg-blue-800 border-b dark:border-slate-700 shadow z-50">
        <div className="flex items-center justify-between h-full gap-4 max-w-7xl px-4 pr-[33px] mx-auto">
          <IconButton aria-label="menu">
            <MenuIcon className="text-white/80" />
          </IconButton>
          <Link
            href="/"
            className={`${headingFont.className} text-white font-bold text-2xl select-none px-2 inline-flex items-center justify-center h-full`}
            translate="no"
          >
            Exclusive Store
          </Link>
          <Tooltip title="Basket">
            <IconButton aria-label="menu" onClick={() => setIsBasketOpen(true)}>
              <Badge badgeContent={0} color="primary">
                <BasketIcon className="text-white/80" />
              </Badge>
            </IconButton>
          </Tooltip>
        </div>
      </div>
      <Drawer
        anchor="right"
        open={isBasketOpen}
        onClose={() => setIsBasketOpen(false)}
      >
        <Box sx={{ width: 250 }} role="presentation">
          <div className="flex h-14 border-b items-center justify-between px-4">
            <h2
              className={`font-bold text-xl leading-8 uppercase text-indigo-950 ${monoFont.className}`}
            >
              My Basket
            </h2>
            <IconButton onClick={() => setIsBasketOpen(false)}>
              <CloseIcon className="text-black/90" />
            </IconButton>
          </div>
          <div className="flex items-center justify-center flex-col min-h-20 gap-3 py-4 text-gray-400">
            <NoItemIcon />
            <h4 className="text-center text-xs">There are no products</h4>
          </div>
        </Box>
      </Drawer>
    </Fragment>
  );
}
