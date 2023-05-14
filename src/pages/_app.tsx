import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import { MantineProvider, AppShell } from '@mantine/core';
import { Header } from '@component/layout/header';
import { Footer } from '@component/layout/footer';
import { Navbar } from '@component/layout/navbar';
import { appWithTranslation, useTranslation } from 'next-i18next';
import { Mesh } from '@component/layout/mesh';

// Inter font from Google Fonts, with latin subset
const inter = Inter({
  subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext'],
  display: 'swap',
});

// An app wrapper with MantineProvider
const App = ({ Component, ...pageProps }: AppProps) => {
  const { t } = useTranslation('works');

  return (
    <>
      <Head>
        <title>{t('works.Portfolio.title') || ''}</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta property="og:title" content={t('works.Portfolio.title') || ''} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://domin.pro/" />
        <meta property="og:image" content="https://domin.pro/works/portfolio.png" />
        <meta property="og:description" content={t('works.Portfolio.description') || ''} />
        {/* Making the card bigger */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="theme-color" content="#e3e3e3" />
        {/* Favicons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          defaultRadius: 'xs',
          fontFamily: inter.style.fontFamily,
          primaryColor: 'dark',
          black: '#141517',
          colors: {
            // Override default gray colors
            gray: [
              '#E3E3E3',
              '#CFCFCF',
              '#C5C5C5',
              '#BBBBBB',
              '#B2B2B2',
              '#A8A8A8',
              '#9E9E9E',
              '#949494',
              '#8A8A8A',
            ],
          },
          globalStyles: (theme) => ({
            // Override default global styles without usage of css imports
            '::selection': {
              backgroundColor: theme.colors.dark[8],
              color: theme.white,
            },
          }),
        }}
      >
        <Mesh>
          <AppShell header={<Header />} footer={<Footer />} padding={0}>
            <Navbar />
            <Component {...pageProps} />
          </AppShell>
        </Mesh>
      </MantineProvider>
    </>
  );
};

export default appWithTranslation(App);
