/** A social link used in the contact card */
interface Social {
  /** The name of the external source */
  name: string;
  /** The link to the external source */
  href: string;
  /** Username */
  username?: string;
  /** The icon of the external source */
  icon: import('@tabler/icons').TablerIcon;
}
