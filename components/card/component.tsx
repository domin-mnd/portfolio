import { FunctionComponent, PropsWithChildren, useRef } from 'react';
import { Card, ScrollArea, Title, CardProps as MantineCardProps } from '@mantine/core';
import { useStyles } from './styles';

/**
 * Section component used under the landing page to display content
 * @param {string} props.title Title of the section
 * @param {ReactNode} props.children Content of the section
 * @returns {FunctionComponent<PropsWithChildren<Props>>} 60vh scrollable card
 */
export const SectionCard: FunctionComponent<PropsWithChildren<CardProps & MantineCardProps>> = ({
  children,
  title,
  height = '60vh',
  ...props // Mantine card props
}) => {
  // Classes instead of styles because it's a component
  const { classes } = useStyles();

  return (
    <Card className={classes.card} radius="sm" {...props}>
      {title && (
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      )}
      <ScrollArea.Autosize
        className={classes.scrollArea}
        mah={height}
        type="never"
        viewportProps={{
          tabIndex: -1,
        }}
      >
        {children}
      </ScrollArea.Autosize>
    </Card>
  );
};
