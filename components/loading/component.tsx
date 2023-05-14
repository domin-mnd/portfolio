import type { FunctionComponent, ReactElement } from 'react';
import { Overlay, rem } from '@mantine/core';
import { useProgress } from '@react-three/drei';
import { useStyles } from './styles';

/**
 * A loading overlay based off if three.js is loaded
 * @returns {ReactElement} A loading overlay
 */
export const Loading: FunctionComponent = (): ReactElement => {
  const { loaded } = useProgress();
  const { classes } = useStyles();

  // Translate into component
  return (
    <>
      {!loaded && (
        <Overlay blur={10} color="gray.0" center>
          <svg
            width={rem(48)}
            height={rem(48)}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={classes.animation}
          >
            <g clip-path="url(#clip0_33_2)">
              <path
                d="M12.1053 22.2105C17.6862 22.2105 22.2105 17.6862 22.2105 12.1053C22.2105 6.52428 17.6862 2 12.1053 2C6.52428 2 2 6.52428 2 12.1053C2 17.6862 6.52428 22.2105 12.1053 22.2105Z"
                stroke="white"
                stroke-opacity="0.5"
                stroke-width="3.15789"
              />
              <path
                d="M22.2107 12.1053C22.2107 5.82737 17.1202 2 12.1055 2"
                stroke="white"
                stroke-width="3.15789"
              />
            </g>
            <defs>
              <clipPath id="clip0_33_2">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Overlay>
      )}
    </>
  );
};
