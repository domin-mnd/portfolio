/** Menu's zustand state */
type MenuStore = {
  /** Whether the menu is open or not */
  opened: boolean;
  /** Toggle the open state of the menu */
  toggle: () => void;
  /** Set the state to false */
  close: () => void;
  /** Set the state to open */
  open: () => void;
};