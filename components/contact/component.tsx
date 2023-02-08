import type { FunctionComponent, ReactElement } from 'react';
import { ActionIcon, Group, Title, Tooltip } from '@mantine/core';
import { useStyles } from './styles';
import { socials } from './config';
import Kazan from '@public/contacts/kazan.jpg';

import { about } from '@component/about';
import { Trans, useTranslation } from 'next-i18next';

/**
 * Contact card with a banner image and social media links along with overlay & some information
 * @returns {ReactElement} Contact card with a banner image and social media links
 */
export const Contact: FunctionComponent = (): ReactElement => {
  const { classes } = useStyles();
  const { t } = useTranslation('about');

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
            <Tooltip key={social.name} label={social.username ?? social.name} bg="white" c="black" withArrow>
              <ActionIcon
                size={28}
                className={classes.social}
                variant="transparent"
                component="a"
                href={social.href}
                target="_blank"
              >
                <social.icon size={22} stroke={1.5} />
              </ActionIcon>
            </Tooltip>
          ))}
        </Group>
        <Title className={classes.title} my="xl">
          <Trans i18nKey="full-name.first" t={t}>
            {about.name[0]}
          </Trans>
          {' '}
          <Trans i18nKey="full-name.last" t={t}>
            {about.name[1]}
          </Trans>
        </Title>
      </div>
    </div>
  );
};
