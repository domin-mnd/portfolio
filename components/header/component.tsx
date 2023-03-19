import { FunctionComponent, ReactElement, useState } from 'react';
import { Burger, Button, Container, Group, Menu, Tabs } from '@mantine/core';
import { useRouter, NextRouter } from 'next/router';
import { useStyles } from './styles';
import { tabs as oTabs } from './config';
import { useDisclosure } from '@mantine/hooks';
import { Trans, useTranslation } from 'next-i18next';
import { Drawer } from '@component/drawer';
import { Translations } from '@component/translations';

/**
 * Header component used on the top of the page to display tabs
 * @returns {ReactElement} not fixed container with tabs & drawer
 */
export const Header: FunctionComponent = (): ReactElement => {
  // Whether translations dropdown is opened or not
  const [translationOpened, setTranslationOpened] = useState(false);
  const { classes } = useStyles({
    translationDropdownOpened: translationOpened,
  });

  const router: NextRouter = useRouter();

  // Header translation
  const { t } = useTranslation('header');

  // Burger disclosure state
  const [opened, { toggle, close }] = useDisclosure(false);

  // Does not include slash
  const [hash, setHash] = useState<string>('#');

  // Mapped tabs taken from config
  const tabs = oTabs.map((tab) => (
    <Tabs.Tab value={tab.href} key={tab.href}>
      {typeof tab.label === 'function' ? (
        tab.label(t('sections.' + ['landing', 'works', 'skills', 'contact'][oTabs.indexOf(tab)]))
      ) : (
        <Trans
          i18nKey={'sections.' + ['landing', 'works', 'skills', 'contact'][oTabs.indexOf(tab)]}
          t={t}
        >
          {tab.label}
        </Trans>
      )}
    </Tabs.Tab>
  ));

  if (typeof window !== 'undefined') {
    router.events.on('hashChangeStart', (href) => {
      setHash(href);
    });
  }

  /**
   * replaces the hash in the url with the href provided
   * @param {string} href a url with a hash
   * @returns {void}
   */
  function pushHash(href: string): void {
    const hash = href.match(/#([a-z0-9]+)/gi);
    window.location.hash = hash ? hash[0] : '';
    // Switch the tab
    // If the hash is #, it will be empty string
    setHash(window.location.hash || '#');
    // For a carousel, emitting this event will switch the slide
    // As it was declared in carousel
    router.events.emit('hashChangeComplete', href);
  }

  return (
    <Container className={classes.header}>
      <Group p="sm" align="center" position="center" spacing={6}>
        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
        <Translations
          classNames={{
            button: classes.translationButton,
          }}
          onChange={setTranslationOpened}
        />
        <Tabs
          variant="pills"
          // Value keyword in onTabChange
          value={hash}
          onTabChange={(value) => pushHash(value ?? '#')}
          classNames={{
            root: classes.mobile,
            tabsList: classes.tabsList,
            tab: classes.tab,
          }}
        >
          <Tabs.List>{tabs}</Tabs.List>
        </Tabs>
      </Group>
      <Drawer opened={opened} onClose={toggle}>
        <Translations
          classNames={{
            button: classes.translationMobileButton,
          }}
          onChange={setTranslationOpened}
        />
        <Tabs
          variant="pills"
          orientation="vertical"
          placement="right"
          // Value keyword in onTabChange
          value={hash}
          // Close Drawer & change the route via routes on tab change
          onTabChange={(value) => {
            close();
            pushHash(value ?? '#');
          }}
          classNames={{
            tabsList: classes.tabsList,
            tab: classes.tab,
          }}
        >
          <Tabs.List>{tabs}</Tabs.List>
        </Tabs>
      </Drawer>
    </Container>
  );
};
