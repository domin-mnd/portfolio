import type { FunctionComponent, PropsWithChildren } from 'react';
import { Card, ScrollArea, Title, CardProps } from '@mantine/core';
import { useStyles } from './styles';

/** Properties for section card */
export interface Props {
  /** Title of the section displayed either on the side or on top */
  title?: string;
  /** Height of the scrollable area */
  height?: string;
}

/**
 * Section component used under the landing page to display content
 * @param {string} props.title Title of the section
 * @param {ReactNode} props.children Content of the section
 * @returns {FunctionComponent<PropsWithChildren<Props>>} 60vh scrollable card
 */
export const SectionCard: FunctionComponent<PropsWithChildren<Props & CardProps>> = ({
  children,
  title,
  height = '60vh',
  ...props // Mantine card props
}) => {
  // Classes instead of styles because it's a component
  const { classes } = useStyles();

  return (
    <Card className={classes.card} {...props}>
      {title && (
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      )}
      <ScrollArea.Autosize
        className={classes.scrollArea}
        maxHeight={height}
        type="never"
        sx={{ overflow: 'hidden' }}
      >
        {children}
      </ScrollArea.Autosize>
    </Card>
  );
};
