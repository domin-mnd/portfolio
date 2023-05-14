import { createStyles, MantineTheme } from "@mantine/core";

export const useStyles = createStyles((theme: MantineTheme, { x, y }: { x: number; y: number }) => ({
  menu: {
    top: y,
    left: x,
  }
}));
