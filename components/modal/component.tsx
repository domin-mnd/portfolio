import type { FunctionComponent, PropsWithChildren, ReactElement } from 'react';
import { Modal as MantineModal, ModalProps } from '@mantine/core';
import { useStyles } from './styles';

/**
 * A custom modal component based off mantine's Modal
 * @see https://mantine.dev/core/modal/
 * @returns {ReactElement} A modal
 */
export const Modal: FunctionComponent<PropsWithChildren<ModalProps>> = ({
  children,
  ...props
}): ReactElement => {
  const { classes } = useStyles();

  return (
    <MantineModal
      centered
      classNames={{
        // Whether to blur the background of the modal or not (depending on screen size)
        // Could use useMediaQuery but it's js, not css. Static media query is much more effecient
        overlay: classes.overlay,
      }}
      overlayProps={{
        blur: 5,
      }}
      transitionProps={{
        transition: 'fade',
      }}
      {...props}
    >
      {children}
    </MantineModal>
  );
};
