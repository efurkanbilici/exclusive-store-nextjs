import { Fragment, useEffect } from "react";
import Head from "next/head";
import Section from "@/components/section";
import Products from "@/components/products";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
  const { t } = useTranslation("home");

  useEffect(() => {
    const navbar = document.querySelector("[data-site-navbar]");
    navbar.style.maxWidth = "80rem";
  }, []);

  return (
    <Fragment>
      <Head>
        <title>{t("DOC_TITLE")} | Next.js Basket System</title>
      </Head>
      <Section
        title={t("HERO_SEC_TITLE")}
        description={t("HERO_SEC_DESCRIPTION")}
        actionButton={{
          label: t("HERO_SEC_BTN"),
          url: "/#products",
        }}
      >
        <Products />
      </Section>
    </Fragment>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", [
        "common",
        "home",
        "basket",
      ])),
    },
  };
}
