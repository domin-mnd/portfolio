import type { GetStaticProps } from 'next';
import type { ReactNode } from 'react';
import { VerticalCarousel } from '@component/carousel';
import { Landing } from '@component/landing';
import { Works } from '@component/works';
import { SectionCard } from '@component/card';
import { Skills } from '@component/skills';
import { Contact } from '@component/contact';
import { About } from '@component/about';
import { Loading } from '@component/loading';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

// An index page (/)
export default (): ReactNode => {
  const { t: about } = useTranslation('about');
  const { t: works } = useTranslation('works');
  const { t: skills } = useTranslation('skills');
  const { t: contact } = useTranslation('contact');

  return (
    <>
      <Loading />
      <VerticalCarousel>
        <Landing />
        <SectionCard title={about('section-name') ?? ""}>
          <About />
        </SectionCard>
        <SectionCard title={works('section-name') ?? ""}>
          <Works />
        </SectionCard>
        <SectionCard title={skills('section-name') ?? ""}>
          <Skills />
        </SectionCard>
        <SectionCard title={contact('section-name') ?? ""}>
          <Contact />
        </SectionCard>
      </VerticalCarousel>
    </>
  );
}

// or getServerSideProps: GetServerSideProps<Props> = async ({ locale })
export const getStaticProps: GetStaticProps = async ({
  locale,
}) => ({
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
})