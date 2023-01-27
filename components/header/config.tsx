import type { ReactNode } from "react";
import { Text } from "@mantine/core";

/** An object defining a tab */
export interface Tab {
  /** Label displayed as the name of the tab */
  label: string;
  /** href used to navigate to the tab, has to be defined starting with hash */
  href: string;
  /** ReactNode displayed instead of label, custom element */
  node?: ReactNode;
}

/** An array of tabs displayed in header & mobile drawer */
export const tabs: Tab[] = [
  {
    label: "Domin",
    href: "#",
    node: (
      <Text size="md" weight={500} underline>
        Domin
      </Text>
    )
  },
  {
    label: "Works",
    href: "#works",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "CV",
    href: "#cv"
  },
  {
    label: "Contact",
    href: "#contact",
  }
];
