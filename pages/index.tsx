import type { ReactNode } from 'react';
import { Canvas } from '@react-three/fiber';
import { Text } from '@mantine/core';
import { Keyboard } from '@component/keyboard';
import { VerticalCarousel } from '@component/carousel';
import { Works } from '@component/works';
import { SectionCard } from '@component/card';
import { Skills } from '@component/skills';
import { Contact } from '@component/contact';
import { About } from '@component/about';
import { Loading } from '@component/loading';

import { about } from '@component/about';

// An index page (/)
export default (): ReactNode => (
  <>
    <Loading />
    <VerticalCarousel
      slides={[
        <>
          <Canvas
            style={{
              maxHeight: 760,
            }}
          >
            <Keyboard />
          </Canvas>
          <Text
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: '5rem',
              fontWeight: 900,
              mixBlendMode: 'difference',
              userSelect: 'none',
              color: 'white',
              textTransform: 'uppercase',
            }}
          >
            {about.username}
          </Text>
        </>,
        <SectionCard title="About">
          <About />
        </SectionCard>,
        <SectionCard title="Works">
          <Works />
        </SectionCard>,
        <SectionCard title="Skills">
          <Skills />
        </SectionCard>,
        <SectionCard title="Contacts">
          <Contact />
        </SectionCard>,
      ]}
    />
  </>
);
