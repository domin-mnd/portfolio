import type { ReactNode } from 'react';
import { VerticalCarousel } from '@component/carousel';
import { Landing } from '@component/landing';
import { Works } from '@component/works';
import { SectionCard } from '@component/card';
import { Skills } from '@component/skills';
import { Contact } from '@component/contact';
import { About } from '@component/about';
import { Loading } from '@component/loading';

// An index page (/)
export default (): ReactNode => (
  <>
    <Loading />
    <VerticalCarousel>
      <Landing />
      <SectionCard title="About">
        <About />
      </SectionCard>
      <SectionCard title="Works">
        <Works />
      </SectionCard>
      <SectionCard title="Skills">
        <Skills />
      </SectionCard>
      <SectionCard title="Contacts">
        <Contact />
      </SectionCard>
    </VerticalCarousel>
  </>
);
