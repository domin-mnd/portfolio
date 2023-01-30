import type { ReactElement } from 'react';
import { LoadingOverlay } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useProgress } from '@react-three/drei';

/**
 * A loading overlay based off if three.js is loaded
 * @returns {ReactElement} A loading overlay
 */
export const Loading = (): ReactElement => {
  const { loaded } = useProgress();
  const mobile = useMediaQuery('(max-width: 768px)');

  return (
    <LoadingOverlay
      overlayBlur={mobile ? 0 : 5}
      overlayOpacity={mobile ? 0.5 : 0}
      overlayColor="white"
      visible={!loaded}
    />
  );
};
