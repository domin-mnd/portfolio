import type { FunctionComponent, PropsWithChildren, ReactElement } from 'react';
import { Modal as MantineModal, ModalProps } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

/**
 * A custom modal component based off mantine's Modal
 * @see https://mantine.dev/core/modal/
 * @returns {ReactElement} A modal
 */
export const Modal: FunctionComponent<PropsWithChildren<ModalProps>> = ({
  children,
  ...props
}): ReactElement => {
  // Whether to blur the background of the modal or not
  const mobile = useMediaQuery('(max-width: 980px)');

  return (
    <MantineModal
      centered
      overlayProps={{
        blur: mobile ? 0 : 5,
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
