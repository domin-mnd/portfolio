import type { FunctionComponent, ReactElement } from 'react';
import { Overlay } from '@mantine/core';
import { useProgress } from '@react-three/drei';

/**
 * A loading overlay based off if three.js is loaded
 * @returns {ReactElement} A loading overlay
 */
export const Loading: FunctionComponent = (): ReactElement => {
  const { loaded } = useProgress();

  return <>{!loaded && <Overlay blur={10} color="gray.0" />}</>;
};
