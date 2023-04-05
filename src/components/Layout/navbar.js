import { Lora } from "next/font/google";
import Link from "next/link";
import Badge from "@mui/material/Badge";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import BasketIcon from "@mui/icons-material/ShoppingBasket";

const headingFont = Lora({
  subsets: ["latin"],
});

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full h-14 bg-blue-800 border-b dark:border-slate-700 shadow z-50">
      <div className="flex items-center justify-between h-full gap-4 max-w-7xl px-4 mx-auto">
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
          <IconButton aria-label="menu">
            <Badge badgeContent={0} color="primary">
              <BasketIcon className="text-white/80" />
            </Badge>
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
}
