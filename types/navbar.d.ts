/** Navbar's zustand state */
interface NavbarStore {
  /** Whether navbar is open or not */
  opened: boolean;
  /** Toggle the open state of navbar */
  toggle: () => void;
  /** Set the state to false */
  close: () => void;
  /** Set the state to open */
  open: () => void;
}
