import { useStyles } from "./styles";
import { FunctionComponent, ReactElement, useState } from "react";
import { Button, Menu, MenuProps } from "@mantine/core";
import { translations as oTranslations } from './config';
import { NextRouter, useRouter } from "next/router";
import { Help } from "@component/help";

/** Translations component additional properties */
interface Props {
  /** Extended Styles API of mantine */
  classNames?: {
    /** Translation button that opens the menu */
    button?: string;
  }
}

/**
 * Translation Menu used in drawer & header with translation list
 * @see https://mantine.dev/core/menu/
 * @returns {ReactElement} A responsive menu with the button opening it
 */
export const Translations: FunctionComponent<MenuProps & Props> = ({ classNames, ...props }): ReactElement => {
  const { classes } = useStyles();
  const router: NextRouter = useRouter();

  const [translation, setTranslation] = useState<Translation>(
    oTranslations.find((t) => t.locale === router.locale) ?? oTranslations[0]
  );

  const translations = oTranslations.map((translation) => (
    <Menu.Item
      key={translation.locale}
      icon={<translation.flag w={20} />}
      onClick={() => {
        setTranslation(translation);
        // Refresh the page when locale set
        // Don't use Link provided by next/link
        // It will cause carousel to re-render
        window.location.pathname = translation.locale;
      }}
    >
      {translation.name}
    </Menu.Item>
  ));

  return (
    <Menu
      shadow="md"
      width={200}
      classNames={{
        dropdown: classes.dropdown,
        item: classes.item,
      }}
      {...props}
    >
      <Menu.Target>
        <Button className={classNames?.button}>
          <translation.flag w={25} />
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        {translations}
        <Menu.Divider />
        <Help />
      </Menu.Dropdown>
    </Menu>
  );
}
