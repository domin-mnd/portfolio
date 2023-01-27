import type { FunctionComponent, PropsWithChildren } from "react";
import { Card, ScrollArea, Title } from "@mantine/core";
import { useStyles } from "./styles";

/** Properties for section card */
interface Props {
  /** Title of the section displayed either on the side or on top */
  title?: string;
}

/**
 * Section component used under the landing page to display content
 * @param {string} props.title Title of the section
 * @param {ReactNode} props.children Content of the section
 * @returns {FunctionComponent<PropsWithChildren<Props>>} 60vh scrollable card
 */
export const SectionCard: FunctionComponent<PropsWithChildren<Props>> = ({
  children,
  title,
}) => {
  // Classes instead of styles because it's a component
  const { classes } = useStyles();

  return (
    <Card className={classes.card}>
      {title && (
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      )}
      <ScrollArea className={classes.scrollArea} type="never">
        {children}
      </ScrollArea>
    </Card>
  );
};
