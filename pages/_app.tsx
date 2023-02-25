import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Inter } from '@next/font/google';
import { MantineProvider, AppShell, Box } from '@mantine/core';
import { Header } from '@component/header';
import { Footer } from '@component/footer';
import { appWithTranslation, useTranslation } from 'next-i18next';

// Inter font from Google Fonts, with latin subset
const inter = Inter({
  subsets: ['latin', 'latin-ext', 'cyrillic'],
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
      <link rel="shortcut icon" href="/favicon.svg" />
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
        headings: {
          // In mantine@6 headings' font family sticks to theme.fontFamily by default
          fontFamily: inter.style.fontFamily,
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
      <Box bg="gray.0">
        <AppShell header={<Header />} footer={<Footer />} padding={0}>
          <Component {...pageProps} />
        </AppShell>
      </Box>
    </MantineProvider>
  </>
)};

export default appWithTranslation(App);
