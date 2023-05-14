import type { GetStaticProps } from 'next';
import { ReactNode } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { VerticalCarousel } from '@component/carousel';
import { Landing } from '@component/landing';
import { Works } from '@component/works';
import { SectionCard } from '@component/card';
import { Skills } from '@component/skills';
import { Contact } from '@component/contact';
import { About } from '@component/about';
import { Loading } from '@component/loading';
import { Menu } from '@component/menu';

// An index page (/)
export default function Index(): ReactNode {
  // Getting section names from the translation files
  const { t } = useTranslation(['about', 'works', 'skills', 'contact']);
  // A shorthand function for getting title
  const title = (ns: string): string => t('section-name', { ns });

  return (
    <>
      <Loading />
      {/* <Menu /> */}
      <VerticalCarousel>
        <Landing />
        <SectionCard title={title('about')}>
          <About />
        </SectionCard>
        <SectionCard title={title('works')}>
          <Works />
        </SectionCard>
        <SectionCard title={title('skills')}>
          <Skills />
        </SectionCard>
        <SectionCard title={title('contact')}>
          <Contact />
        </SectionCard>
      </VerticalCarousel>
    </>
  );
}

// Translating the page from the server side
// or getServerSideProps: GetServerSideProps<Props> = async ({ locale })
export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', [
      'about',
      'common',
      'contact',
      'footer',
      'header',
      'skills',
      'works',
    ])),
  },
});
