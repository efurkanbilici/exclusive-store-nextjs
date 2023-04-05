import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-white overflow-hidden dark:bg-slate-900 scroll-smooth">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
