import { FunctionComponent, ReactElement, useEffect, useState } from 'react';
import { cardLabel, description, defaultButton, outlineButton } from './config';
import { Menu as MantineMenu } from '@mantine/core';
import { useStore } from './state';

export const Menu: FunctionComponent = (): ReactElement => {
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  // const { classes } = useStyles({ x, y });
  const state = useStore();

  useEffect(() => {
    /**
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button#value Mouse values}
     */
    document.addEventListener(
      'mouseup',
      (event) => {
        if (event.button !== 2) return state.close();
        // Show the menu
        state.open();

        setPosition({
          x: event.clientX,
          y: event.clientY,
        });
      },
      false
    );

    // Do not open context menu at all
    document.addEventListener('contextmenu', (event) => event.preventDefault());
  });

  return (
    <MantineMenu
      styles={{
        dropdown: {
          top: `${position.y}px !important`,
          left: `${position.x}px !important`,
        },
      }}
      opened={state.opened}
    >
      <MantineMenu.Dropdown>
        <MantineMenu.Label>Optimization</MantineMenu.Label>
        <MantineMenu.Item>3D Model</MantineMenu.Item>
        <MantineMenu.Item>Mesh Background</MantineMenu.Item>
        <MantineMenu.Item>Blur</MantineMenu.Item>
      </MantineMenu.Dropdown>
    </MantineMenu>
  );
};
