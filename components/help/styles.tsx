import { createStyles, MantineTheme } from "@mantine/core";

export const useStyles = createStyles((theme: MantineTheme) => ({
  link: {
    color: theme.colors.blue[7],
    textDecoration: "underline",
    cursor: "pointer",

    ':hover': {
      textDecoration: "none"
    }
  }
}));
