import type { FunctionComponent, ReactElement } from 'react';
import { Avatar, Flex, Space, Text, Title } from '@mantine/core';
import { about } from './config';
import { useStyles } from './styles';
import { useMediaQuery } from '@mantine/hooks';
import { Trans, useTranslation } from 'next-i18next';
import { IconMapPin, IconClockHour4 } from '@tabler/icons';
import { Time } from '@component/time';

/**
 * An about section with information about the person
 * @returns {ReactElement} A flex card with information about the person
 */
export const About: FunctionComponent = (): ReactElement => {
  const { classes } = useStyles();
  // Decide the order of the title
  const mobile = useMediaQuery('(max-width: 360px');
  const { t } = useTranslation('about');

  return (
    <Flex className={classes.columns}>
      <Flex className={classes.information}>
        <Avatar src={about.avatar.src} size={200} alt={about.name[0]} className={classes.avatar} />
        <div>
          <Title mt={mobile ? 0 : 'md'} order={mobile ? 6 : 5}>
            <Trans i18nKey="full-name.first" t={t}>
              {about.name[0]}
            </Trans>{' '}
            <Trans i18nKey="full-name.last" t={t}>
              {about.name[1]}
            </Trans>
          </Title>
          {about.username && (
            <Text size="sm" color="dimmed" mb="sm">
              {t('nickname-label', {
                nicknameValue: t('nickname-value'),
              })}
            </Text>
          )}
          <Flex align="center">
            <IconMapPin size={18} />
            <Space w={5} />
            <Text size="sm">
              <Trans i18nKey="location-value" t={t}>
                {about.location}
              </Trans>
            </Text>
          </Flex>
          <Flex align="center" mt={5}>
            <IconClockHour4 size={18} />
            <Space w={5} />
            <Text size="sm">
              <Time />
            </Text>
          </Flex>
        </div>
      </Flex>
      <Text>
        <Trans i18nKey="description-value" t={t}>
          {about.description}
        </Trans>
      </Text>
    </Flex>
  );
};
