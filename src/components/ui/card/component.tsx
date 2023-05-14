import { FunctionComponent, PropsWithChildren, useRef } from 'react';
import { Card, ScrollArea, Title, CardProps as MantineCardProps, rem, Box } from '@mantine/core';
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
  className,
  ...props // Mantine card props
}) => {
  const { classes, cx } = useStyles();

  return (
    <Card className={classes.card} radius="sm" shadow="xl" {...props}>
      {title && (
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      )}
      {/* <ScrollArea.Autosize
        className={cx(classes.scrollArea, className)}
        type="never"
        viewportProps={{
          tabIndex: -1,
        }}
      > */}
      <Box className={classes.scrollArea} data-scrollarea>
        <Box tabIndex={-1} className={cx(classes.innerScrollArea, className)}>
          {children}
        </Box>
      </Box>
      {/* </ScrollArea.Autosize> */}
    </Card>
  );
};
