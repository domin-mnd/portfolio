import type { FunctionComponent, ReactElement } from 'react';
import { Text } from '@mantine/core';
import { Canvas } from '@react-three/fiber';
import { Keyboard } from '@component/keyboard';
import { about } from '@component/about';

export const Landing: FunctionComponent = (): ReactElement => (
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
  </>
);
