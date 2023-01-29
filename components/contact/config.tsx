import { IconBrandGithub, IconBrandReddit, IconBrandTwitter, TablerIcon } from '@tabler/icons';

/** A social media link used in the contact card */
export interface Social {
  /** The name of the social media */
  name: string;
  /** The link to the social media */
  href: string;
  /** Username */
  username?: string;
  /** The icon of the social media */
  icon: TablerIcon;
}

// Social medias
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
];
