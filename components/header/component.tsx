import type { FunctionComponent, ReactElement } from "react";
import { Burger, Container, Drawer, Group, Tabs } from "@mantine/core";
import { useRouter, NextRouter } from "next/router";
import { useStyles } from "./styles";
import { tabs as oTabs } from "./config";
import { useDisclosure } from "@mantine/hooks";

/**
 * Header component used on the top of the page to display tabs
 * @todo Fix aria selection on tabs
 * @returns {ReactElement} not fixed container with tabs & drawer
 */
export const Header: FunctionComponent = (): ReactElement => {
  const { classes } = useStyles();
  const router: NextRouter = useRouter();

  // Burger disclosure state
  const [opened, { toggle, close }] = useDisclosure(false);

  // Does not include slash
  const query: RegExpMatchArray | null = router.asPath.match(/#([a-z0-9]+)/gi);
  const hash: string = query ? query[0] : "#";

  // Mapped tabs taken from config
  const tabs = oTabs.map((tab) => (
    <Tabs.Tab value={tab.href} key={tab.href}>
      {tab.node ?? tab.label}
    </Tabs.Tab>
  ));

  /**
   * replaces the hash in the url with the href provided
   * @param {string} href a url with a hash
   * @returns {void}
   */
  function pushHash(href: string): void {
    const hash = href.match(/#([a-z0-9]+)/gi);
    window.location.hash = hash ? hash[0] : "";
    router.events.emit("hashChangeComplete", href);
  }

  return (
    <Container className={classes.header}>
      <Group p="sm" align="center" position="center">
        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />
        <Tabs
          variant="pills"
          // Value keyword in onTabChange
          value={hash}
          onTabChange={(value) => pushHash(value ?? "#")}
          classNames={{
            root: classes.mobile,
            tabsList: classes.tabsList,
            tab: classes.tab,
          }}
        >
          <Tabs.List>{tabs}</Tabs.List>
        </Tabs>
      </Group>
      <Drawer
        opened={opened}
        className={classes.drawer}
        onClose={toggle}
        transition="slide-down"
        position="top"
        // Use the Account as a title next to close icon
        padding="md"
        size="max-content"
      >
        <Tabs
          variant="pills"
          orientation="vertical"
          placement="right"
          // Value keyword in onTabChange
          value={hash}
          // Close Drawer & change the route via routes on tab change
          onTabChange={(value) => {
            close();
            pushHash(value ?? "#");
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
