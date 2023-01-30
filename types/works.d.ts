/** A project stack - languages, frameworks & technologies used */
interface StackBadge {
  /** Name of the stack, will be transformed to uppercase */
  name: string;
  /** Color of the stack, can be a mantine color or hex */
  color: import('@mantine/core').MantineColor | HEX;
}

/** A project object that is being mapped and generated card from */
interface Project {
  /** Title of the project displayed as the white upper text */
  title: string;
  /** Description of the project displayed as the dimmed color text */
  description: string;
  /** Banner image of the project, can be a nextjs module import */
  banner: import('next/image').StaticImageData;
  /** Stack of the project */
  stack: StackBadge[];
  /** URL of the project, redirects in the new tab on card click */
  url?: string;
}

/** Properties for Works component */
interface WorksProps {
  /** An array of projects to be mapped, optional - by default uses config */
  projects?: Project[];
  /** A filter for works to show, takes stack name as an argument, optional */
  filter?: string;
}
