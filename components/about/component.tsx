import type { ReactElement } from 'react';
import { Avatar, Flex, Text, Title } from '@mantine/core';
import { about } from './config';
import { useStyles } from './styles';
import { useMediaQuery } from '@mantine/hooks';

/**
 * An about section with information about the person
 * @returns {ReactElement} A flex card with information about the person
 */
export const About = (): ReactElement => {
  const { classes } = useStyles();
  // Decide the order of the title
  const mobile = useMediaQuery('(max-width: 360px');

  return (
    <Flex className={classes.columns}>
      <Flex className={classes.information}>
        <Avatar src={about.avatar.src} size={200} alt={about.name[0]} className={classes.avatar} />
        <div>
          <Title mt="md" order={mobile ? 6 : 4}>
            {about.name.join(' ')}
          </Title>
          {about.username && (
            <Text size="sm" color="dimmed" mb="sm">
              Also known as {about.username}
            </Text>
          )}
          <Text size="sm">Location:</Text>
          <Text size="sm" color="dimmed">
            {about.location}
          </Text>
        </div>
      </Flex>
      <Text>{about.description}</Text>
    </Flex>
  );
};
