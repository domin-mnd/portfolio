import Document, { Head, Html, Main, NextScript } from 'next/document';
import { createGetInitialProps } from '@mantine/next';
import portfolio from "@public/works/portfolio.png";

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static getInitialProps = getInitialProps;

  render = () => (
    <Html>
      <Head>
        <meta property="og:title" content="Domin's portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://domin.pro/" />
        <meta property="og:image" content="https://domin.pro/works/portfolio.png" />
        <meta property="og:description" content="My personal portfolio website consisting of my projects, skill stack & contact information." />
        {/* Making the card bigger */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="theme-color" content="#e3e3e3" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
