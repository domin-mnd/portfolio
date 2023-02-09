/** Extend the Next.js NextPage type to include a getLayout */
type NextPageWithLayout<P = {}, IP = P> = import('next').NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => React.ReactNode;
};

/**
 * These are used to extend the Next.js AppProps type to include a getLayout
 * function. This is used to wrap the page in a layout component. These types
 * are unused.
 * @see https://nextjs.org/docs/basic-features/layouts#per-page-layouts
 */
interface AppPropsWithLayout extends Omit<import('next/app').AppProps, 'Component'> {
  Component: import('next/app').AppProps['Component'] & {
    getLayout?: (page: ReactElement) => React.ReactNode;
  };
}
