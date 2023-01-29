import {
  IconBrandGithub,
  IconBrandReddit,
  IconBrandTwitter,
  IconMail,
  TablerIcon,
} from '@tabler/icons';

/** A social link used in the contact card */
export interface Social {
  /** The name of the external source */
  name: string;
  /** The link to the external source */
  href: string;
  /** Username */
  username?: string;
  /** The icon of the external source */
  icon: TablerIcon;
}

/** Social medias / Email / Phone (no phone number because yes) */
export const socials: Social[] = [
  {
    name: 'GitHub',
    href: 'https://github.com/Domin-MND',
    username: 'Domin-MND',
    icon: IconBrandGithub,
  },
  {
    name: 'Reddit',
    href: 'https://www.reddit.com/user/Domin-MC',
    username: 'Domin-MC',
    icon: IconBrandReddit,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/Dominiff',
    username: 'Dominiff',
    icon: IconBrandTwitter,
  },
  {
    name: 'Email',
    href: 'mailto:domin@is-a.tech',
    username: 'Domin',
    icon: IconMail,
  },
];
