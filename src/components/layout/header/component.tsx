import { FunctionComponent, ReactElement, useState } from 'react';
import { Burger, Button, Container, Group, Menu, Tabs } from '@mantine/core';
import { useRouter, NextRouter } from 'next/router';
import { useStyles } from './styles';
import { tabs } from './config';
import { useStore as useHeaderStore } from './state';
import { Trans, useTranslation } from 'next-i18next';
import { Translations } from '@component/layout/translations';
import { useStore as useNavbarStore } from '@component/layout/navbar';

/**
 * Header component used on the top of the page to display tabs
 * @returns {ReactElement} not fixed container with tabs & drawer
 */
export const Header: FunctionComponent = (): ReactElement => {
  // Whether translations dropdown is opened or not
  const [translationOpened, setTranslationOpened] = useState(false);
  const { classes, cx } = useStyles();

  const router: NextRouter = useRouter();

  // Header translation
  const { t } = useTranslation('header');

  // Navbar disclosure state
  const navbarState = useNavbarStore();

  // Header tab state
  const headerState = useHeaderStore();

  return (
    <Container className={classes.header}>
      <Group p="sm" align="center" position="center" spacing={6}>
        <Burger
          opened={navbarState.opened}
          onClick={navbarState.toggle}
          className={classes.burger}
          size="sm"
        />
        <Translations
          classNames={{
            button: cx(classes.translation, { [classes.translationOpened]: translationOpened }),
          }}
          onChange={setTranslationOpened}
        />
        <Tabs
          variant="pills"
          // Value keyword in onTabChange
          value={headerState.tab}
          onTabChange={(value) => headerState.pushHash(value ?? '#')}
          classNames={{
            root: classes.mobile,
            tab: classes.tab,
          }}
        >
          <Tabs.List>
            {tabs.map((tab) => (
              <Tabs.Tab value={tab.href} key={tab.href}>
                {typeof tab.label === 'function' ? (
                  tab.label(
                    t('sections.' + ['landing', 'works', 'skills', 'contact'][tabs.indexOf(tab)])
                  )
                ) : (
                  <Trans
                    i18nKey={
                      'sections.' + ['landing', 'works', 'skills', 'contact'][tabs.indexOf(tab)]
                    }
                    t={t}
                  >
                    {tab.label}
                  </Trans>
                )}
              </Tabs.Tab>
            ))}
          </Tabs.List>
        </Tabs>
      </Group>
    </Container>
  );
};
