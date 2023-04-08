import HomeIcon from "@mui/icons-material/Home";
import Button from "@mui/joy/Button";
import Link from "next/link";

export default function ErrorLayout({ title, desc, linkTo = "/" }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 flex items-center justify-center flex-col gap-3 text-center">
      <h1 className="text-slate-900 dark:text-white/80 font-bold tracking-tighter text-3xl">
        {title}
      </h1>
      <p className="text-slate-500 dark: text-slate-400 max-w-xl px-4">
        {desc} You can choose to go to the homepage.
      </p>
      <Link
        href={linkTo}
        className="text-blue-700 dark:text-blue-300 underline mt-4"
      >
        <Button startDecorator={<HomeIcon />}>Go to home</Button>
      </Link>
    </div>
  );
}
