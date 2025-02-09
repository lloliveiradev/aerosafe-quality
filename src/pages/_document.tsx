import { Html, Head, Main, NextScript } from "next/document";
import AosInit from "../components/AosInit";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="../../public/images/favicon.ico" />
      </Head>
      <body className="antialiased">
        <AosInit />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
