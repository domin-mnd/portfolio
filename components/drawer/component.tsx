import type { FunctionComponent, PropsWithChildren, ReactElement } from 'react';
import { useStyles } from './styles';
import { Drawer as MantineDrawer, DrawerProps } from '@mantine/core';

/**
 * A custom drawer component based off mantine's Drawer
 * @see https://mantine.dev/core/modal/
 * @returns {ReactElement} A mobile drawer
 */
export const Drawer: FunctionComponent<PropsWithChildren<DrawerProps>> = ({
  children,
  ...props
}): ReactElement => {
  const { classes } = useStyles();

  return (
    <MantineDrawer
      classNames={{
        header: classes.header,
        content: classes.content,
        title: classes.title,
      }}
      transitionProps={{
        transition: 'slide-down',
      }}
      position="top"
      // Use the Account as a title next to close icon
      padding="md"
      size="max-content"
      {...props}
    >
      {children}
    </MantineDrawer>
  );
};
