import type { FunctionComponent, ReactElement } from "react";
import { Flex, Text } from "@mantine/core";
import { useStyles } from "./styles";
import { footerText } from "./config";

/**
 * Footer component used under the page to display copyright
 * @returns {ReactElement} an absolute positioned element
 */
export const Footer: FunctionComponent = (): ReactElement => {
  const { classes } = useStyles();

  return (
    <Flex justify="center" align="center" className={classes.footer}>
      <Text align="center" color="gray">
        {footerText}
      </Text>
    </Flex>
  );
};
