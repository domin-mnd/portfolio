/** An object for a stack, is a child in skills array */
interface Stack {
  /** The name of the stack: language, framework, tech etc. */
  name: string;
  /** A knowledge level used in the progress bar with the range of 1 to 100 */
  knowledge: IntRange<1, 101>;
  /** Color of the stack, can only be hex */
  color: HEX;
  /** A description of the stack/your knowledge/experience */
  description?: string;
  /** A link to the technology */
  href: string;
  /** An icon */
  icon: React.FC<DeviconProps>;
}

/** Skills properties */
interface SkillsProps {
  /** An array of stacks used in skills section */
  skills?: Stack[];
}
