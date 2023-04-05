import useSwr from "swr";
import { useEffect } from "react";
import { fetcher } from "@/lib/utils";
import View from "@/components/itemView";
import { ProductsSkeleton } from "@/components/skeleton";

export default function Products() {
  const { data, error } = useSwr("https://fakestoreapi.com/products", fetcher);

  useEffect(() => {
    if (!data && !error) {
      const { classList } = document.querySelector("[data-layout]");

      classList.remove("overflow-y-hidden");
      classList.add("overflow-y-auto");
    }
  }, [data, error]);

  if (error) {
    console.error(`An error occurred while fetching ${error}`);
  }

  if (!data) {
    return <ProductsSkeleton />;
  }

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row-dense grid-rows-auto gap-5 py-2"
      id="products"
    >
      {data.map(
        ({ id, image, title, description, rating, price, category }) => (
          <View
            key={id}
            imgSrc={image}
            title={title}
            desc={description}
            rating={rating}
            price={price}
            category={category}
          />
        )
      )}
    </div>
  );
}
