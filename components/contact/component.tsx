import { ActionIcon, Group, Title } from '@mantine/core';
import type { ReactElement } from 'react';
import { useStyles } from './styles';
import { socials, Social } from './config';
import Kazan from '@public/contacts/kazan.jpg';

/**
 * Contact card with a banner image and social media links along with overlay & some information
 * @returns {ReactElement} Contact card with a banner image and social media links
 */
export const Contact = (): ReactElement => {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <div
        // A banner image
        className={classes.image}
        // Set the image as a background using static nextjs module import
        style={{ backgroundImage: `url(${Kazan.src})` }}
      />

      <div
        // A shadow from the below to make the text more readable
        className={classes.overlay}
      />
      <div
        // A container for the content
        // Which sticks to the bottom of the card
        className={classes.content}
      >
        <Group>
          {socials.map((social: Social) => (
            <ActionIcon
              key={social.name}
              size={28}
              className={classes.social}
              variant="transparent"
              component="a"
              href={social.href}
              target="_blank"
            >
              <social.icon size={22} stroke={1.5} />
            </ActionIcon>
          ))}
        </Group>
        <Title className={classes.title} my="xl">
          Kamil Sakhabutdinov
        </Title>
      </div>
    </div>
  );
};
