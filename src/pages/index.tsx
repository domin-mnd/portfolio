import type { GetStaticProps } from 'next';
import { ReactNode } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { VerticalCarousel } from '@component/ui/carousel';
import { Landing } from '@component/pages/index/landing';
import { Works } from '@component/pages/index/works';
import { SectionCard } from '@component/ui/card';
import { Skills } from '@component/pages/index/skills';
import { Contact } from '@component/pages/index/contact';
import { About } from '@component/pages/index/about';
import { Loading } from '@component/pages/index/loading';
import { Menu } from '@component/ui/menu';

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
