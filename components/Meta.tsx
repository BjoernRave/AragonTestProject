import Head from "next/head";
import React, { FC } from "react";

const Meta: FC = () => (
  <Head>
    <title>Ethereum Blocks Explorer</title>
    <meta
      name="description"
      content="WebApp to explore the latest transactions happening on the Ethereum blockchain"
    />
    <meta charSet="utf-8" />
    <link rel="shortcut icon" href="/ethereum.png" />
    <meta
      name="viewport"
      content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
    />
  </Head>
);

export default Meta;
