import type { GetStaticProps } from 'next';
import type { ReactNode } from 'react';
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

// An index page (/)
export default (): ReactNode => {
  // Getting section names from the translation files
  const { t } = useTranslation(['about', 'works', 'skills', 'contact']);

  return (
    <>
      <Loading />
      <VerticalCarousel>
        <Landing />
        <SectionCard title={t('section-name', { ns: 'about' }) ?? ''}>
          <About />
        </SectionCard>
        <SectionCard title={t('section-name', { ns: 'works' }) ?? ''}>
          <Works />
        </SectionCard>
        <SectionCard title={t('section-name', { ns: 'skills' }) ?? ''}>
          <Skills />
        </SectionCard>
        <SectionCard title={t('section-name', { ns: 'contact' }) ?? ''}>
          <Contact />
        </SectionCard>
      </VerticalCarousel>
    </>
  );
};

// Translating the page from the server side
// or getServerSideProps: GetServerSideProps<Props> = async ({ locale })
export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', [
      'about',
      'contact',
      'footer',
      'header',
      'skills',
      'works',
    ])),
  },
});
