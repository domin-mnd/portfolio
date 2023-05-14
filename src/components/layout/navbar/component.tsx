import { useStyles } from './styles';
import { FunctionComponent, ReactElement, useState } from 'react';
import { tabs } from '@component/layout/header';
import { Tabs } from '@mantine/core';
import { Translations } from '@component/layout/translations';
import { useStore as useNavbarStore } from './state';
import { useStore as useHeaderStore } from '@component/layout/header';
import { Drawer } from '@component/layout/drawer';
import { Trans, useTranslation } from 'next-i18next';

export const Navbar: FunctionComponent = (): ReactElement => {
  const { classes, cx } = useStyles();
  const [translationOpened, setTranslationOpened] = useState(false);
  const navbarState = useNavbarStore();
  const headerState = useHeaderStore();

  // Header translation
  const { t } = useTranslation('header');

  return (
    <Drawer opened={navbarState.opened} onClose={navbarState.toggle}>
      <Translations
        classNames={{
          button: cx(classes.translation, { [classes.translationOpened]: translationOpened }),
        }}
        onChange={setTranslationOpened}
      />
      <Tabs
        variant="pills"
        orientation="vertical"
        placement="right"
        // Value keyword in onTabChange
        value={headerState.tab}
        // Close Drawer & change the route via routes on tab change
        onTabChange={(value) => {
          navbarState.close();
          headerState.pushHash(value ?? '#');
        }}
        classNames={{
          tabsList: classes.tabsList,
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
    </Drawer>
  );
};
