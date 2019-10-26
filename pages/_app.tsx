import App from "next/app";
import Head from "next/head";
import { normalize } from "polished";
import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "../lib/theme";
import { isServer } from "../lib/utils";
const Web3 = require("web3");

const GlobalStyles = createGlobalStyle`
${normalize()}

body {
    @font-face {
      font-family: 'Roboto';
      font-display: auto;
      src: local('Roboto'),
           url('https://fonts.googleapis.com/css?family=Roboto&display=swap')
    }
    font-family: fontstack, sans-serif;
  }

body {
  background-color: black;
}

h1,h2,h3,h4,h5,h6,p,span {
  color: white;
}
`;

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    const web3Instance = new Web3(Web3.givenProvider);

    console.log(web3Instance.currentProvider);

    if (!isServer && web3Instance.currentProvider === null) {
      return (
        <h1>
          This app only works with MetaMask, go ahead and install it:{" "}
          <a target="_blank" rel="noreferrer" href="https://metamask.io/">
            here
          </a>
        </h1>
      );
    }

    return (
      <>
        <GlobalStyles></GlobalStyles>
        <Head>
          <title>Ethereum Blocks Explorer</title>
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href="/ethereum.png" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
          />
        </Head>
        <ThemeProvider theme={theme}>
          <Component web3={web3Instance} {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}

export default MyApp;
