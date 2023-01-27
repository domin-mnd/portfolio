import type { AppProps } from "next/app";
import Head from "next/head";
import { Inter } from "@next/font/google";
import { MantineProvider, AppShell, Box } from "@mantine/core";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

// Inter font from Google Fonts, with latin subset
const inter = Inter({
  subsets: ["latin"],
  display: "optional",
});

// An app wrapper with MantineProvider
export default (props: AppProps) => {
  const { Component, ...pageProps } = props;

  return (
    <>
      <Head>
        <title>Me</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          defaultRadius: "xs",
          fontFamily: inter.style.fontFamily,
          primaryColor: "dark",
          black: "#141517",
          colors: {
            // Override default gray colors
            gray: [
              "#E3E3E3", "#CFCFCF", "#C5C5C5",
              "#BBBBBB", "#B2B2B2", "#A8A8A8",
              "#9E9E9E", "#949494", "#8A8A8A",
            ],
          },
          headings: {
            // In mantine@6 headings' font family sticks to theme.fontFamily by default
            fontFamily: inter.style.fontFamily,
          },
        }}
      >
        <Box bg="gray.0">
          <AppShell header={<Header />} footer={<Footer />} padding={0}>
            <Component {...pageProps} />
          </AppShell>
        </Box>
      </MantineProvider>
    </>
  );
};
