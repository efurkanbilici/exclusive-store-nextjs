import { Fragment } from "react";
import Head from "next/head";
import Section from "@/components/section";
import Products from "@/components/products";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Homepage | Next.js Basket System</title>
      </Head>
      <Section>
        <Products />
      </Section>
    </Fragment>
  );
}
