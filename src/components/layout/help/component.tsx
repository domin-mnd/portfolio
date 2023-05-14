import type { FunctionComponent, ReactElement } from 'react';
import { useStyles } from './styles';
import { translateLink } from './config';
import { Text } from '@mantine/core';
import { Trans, useTranslation } from 'next-i18next';

/**
 * Help translate the portfolio text
 * @returns {ReactElement} a text with a subtle link inside
 */
export const Help: FunctionComponent = (): ReactElement => {
  const { classes } = useStyles();
  const { t } = useTranslation('header');

  return (
    <Text fz="xs" px="sm">
      <Trans
        t={t}
        i18nKey="help-translate.content"
        values={{
          portfolio: t('help-translate.portfolio'),
        }}
        components={{
          subtle: (
            <Text
              span
              component="a"
              target="_blank"
              href={translateLink}
              className={classes.link}
            />
          ),
        }}
      >
        Help translate the{' '}
        <Text span component="a" target="_blank" href={translateLink} className={classes.link}>
          portfolio
        </Text>
        ...
      </Trans>
    </Text>
  );
};
