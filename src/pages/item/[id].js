import { Fragment, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Button from "@mui/joy/Button";
import Chip from "@mui/joy/Chip";
import Rating from "@mui/material/Rating";
import BackIcon from "@mui/icons-material/ArrowBack";
import ImageZoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { styled } from "@mui/material";
import { useDarkMode } from "@/lib/utils";

export default function ProductPage({ data }) {
  const darkMode = useDarkMode();
  const { title, image: imageUrl, description, rating, price, category } = data;

  useEffect(() => {
    const navbar = document.querySelector("[data-site-navbar]");
    const layout = document.querySelector("[data-layout]");

    const { classList } = layout;

    navbar.style.maxWidth = "56rem";
    classList.remove("overflow-y-hidden");
    classList.add("overflow-y-auto");
  }, []);

  const StyledRating = styled(Rating)({
    "& .MuiRating-iconEmpty": {
      color: darkMode ? "rgba(255,255,255,.35)" : "rgba(0,0,0,.25)",
    },
  });

  return (
    <Fragment>
      <Head>
        <title>{title} | Exclusive Store</title>
      </Head>
      <div className="max-w-4xl px-4 mx-auto py-6 md:py-8 xl:py-10">
        <div className="mb-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-[14px] inline-flex items-center justify-start gap-2 text-blue-700 leading-4 tracking-tight dark:text-blue-400"
          >
            <BackIcon className="text-[14px]" />
            <span className="underline">All Products</span>
          </Link>
          <Chip color="neutral" size="sm" variant="outlined">
            {category}
          </Chip>
        </div>
        <div className="flex flex-col md:flex-row gap-4 border p-6 rounded overflow-hidden border-slate-300 dark:border-slate-500">
          <div className="py-4 px-6 border border-blue-400 border-2 rounded-lg basis-6/12 min-w-[280px] dark:border-blue-300/60">
            <ImageZoom>
              <Image
                src={imageUrl}
                width={200}
                height={200}
                alt="primary_img"
                priority={false}
                as="image"
              />
            </ImageZoom>
            <em className="text-slate-400 text-xs mt-5 leading-3 block text-center tracking-tighter select-none dark:text-slate-500">
              Click to zoom image..
            </em>
          </div>
          <div className="px-4 py-2 flex flex-col">
            <div className="mb-3">
              <h1 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-200">
                {title}
              </h1>
              <p className="text-xs text-slate-500 py-2 dark:text-slate-300">
                {description}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center justify-start gap-2">
                <StyledRating value={rating?.rate} precision={0.5} readOnly />
                <label className="text-green-900 text-[14px] mt-1 dark:text-green-400/80">
                  ({rating?.count})
                </label>
              </div>
              <h4 className="text-2xl text-blue-900 dark:text-blue-500">
                {price}$
              </h4>
            </div>
            <div className="mt-auto pt-6">
              <Button color="primary" size="lg" className="bg-blue-500 w-full">
                Add To Basket
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export async function getServerSideProps({ params }) {
  const API_URL = "https://fakestoreapi.com/products/";
  const itemId = Number(params.id);

  if (!itemId) {
    return {
      notFound: true,
    };
  }

  try {
    const response = await fetch(API_URL + itemId);
    const data = await response.json();

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
