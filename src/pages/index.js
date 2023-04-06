import { Fragment, useEffect } from "react";
import Head from "next/head";
import Section from "@/components/section";
import Products from "@/components/products";

export default function Home() {
  useEffect(() => {
    const navbar = document.querySelector("[data-site-navbar]");
    navbar.style.maxWidth = "80rem";
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Homepage | Next.js Basket System</title>
      </Head>
      <Section
        title="Latest Products"
        description="We respond to the demands of our customers with our innovative and high quality products. You can visit our page to meet our innovative and high quality products in line with the latest trends."
        actionButton={{
          label: "View Products",
          url: "/#products",
        }}
      >
        <Products />
      </Section>
    </Fragment>
  );
}
