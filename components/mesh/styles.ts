import { createStyles, MantineTheme } from "@mantine/core";

export const useStyles = createStyles((theme: MantineTheme) => ({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
  },

  mesh: {
    // "--gradient-color-1": theme.colors.yellow[0],
    // "--gradient-color-2": theme.colors.green[0],
    // "--gradient-color-3": theme.colors.blue[0],
    // "--gradient-color-4": theme.colors.red[0],

    "--gradient-color-1": theme.colors.gray[0],
    "--gradient-color-2": theme.colors.gray[2],
    "--gradient-color-3": theme.colors.gray[0],
    "--gradient-color-4": theme.colors.gray[1],
  },

  override: {
    backgroundColor: theme.colors.gray[0],
  }
}));
