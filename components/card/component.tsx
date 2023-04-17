import { FunctionComponent, PropsWithChildren, useRef } from 'react';
import { Card, ScrollArea, Title, CardProps as MantineCardProps, rem } from '@mantine/core';
import { useStyles } from './styles';
import { useMediaQuery } from '@mantine/hooks';

/**
 * Section component used under the landing page to display content
 * @param {string} props.title Title of the section
 * @param {ReactNode} props.children Content of the section
 * @returns {FunctionComponent<PropsWithChildren<Props>>} 60vh scrollable card
 */
export const SectionCard: FunctionComponent<PropsWithChildren<CardProps & MantineCardProps>> = ({
  children,
  title,
  height,
  ...props // Mantine card props
}) => {
  // Classes instead of styles because it's a component
  const { classes } = useStyles();
  const mobile = useMediaQuery('(max-width: 768px)');
  height ??= mobile ? '60vh' : rem(440);

  return (
    <Card className={classes.card} radius="sm" shadow="xl" {...props}>
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
