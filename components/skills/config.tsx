import type { FunctionComponent } from 'react';
import {
  JavaOriginal,
  JavascriptOriginal,
  SassOriginal,
  TailwindcssPlain,
  TypescriptPlain,
  ReactOriginal,
  ReduxOriginal,
  NextjsOriginal,
  VuejsOriginal,
  NestjsPlain,
  PythonOriginal,
  RustPlain,
} from 'devicons-react';

/** A type for SVG props of a devicon icon used in stack */
export interface IconProps extends React.SVGProps<SVGElement> {
  /** A size of the icon */
  size?: number | string;
}

/** A type for enumerating an integer */
export type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>;

/** A type for finding a range of integers */
export type IntRange<F extends number, T extends number> = Exclude<
  Enumerate<T>, // A range starting point
  Enumerate<F> // A range ending point, excluding the starting point
>;

/** A safe type for a hex color */
export type HEX = `#${string}`;

/** An object for a stack, is a child in skills array */
export interface Stack {
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
  icon: FunctionComponent<IconProps>;
}

/** An array of stacks used in Skills component in skills section */
export const skills: Stack[] = [
  {
    name: 'Java',
    knowledge: 69, // For the sake of the nice number
    color: '#EA2D2E',
    description:
      'I started my programming journey with Java for mobile development and I still love it to this day.',
    href: 'https://www.java.com/en/',
    icon: JavaOriginal,
  },
  {
    name: 'JavaScript',
    knowledge: 94,
    color: '#F7DF1E',
    description: 'After some time I switched to web development and all started with JavaScript.',
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    icon: JavascriptOriginal,
  },
  {
    name: 'SASS',
    knowledge: 85,
    color: '#CC6699',
    description: 'A preprocessor scripting language that is interpreted or compiled into CSS.',
    href: 'https://sass-lang.com/',
    icon: SassOriginal,
  },
  {
    name: 'Tailwind CSS',
    knowledge: 74,
    color: '#38B2AC',
    description: 'A utility-first CSS framework.',
    href: 'https://tailwindcss.com/',
    icon: TailwindcssPlain,
  },
  {
    name: 'TypeScript',
    knowledge: 84,
    color: '#007ACC',
    description: 'A must have for most of my projects. Used in this portfolio.',
    href: 'https://www.typescriptlang.org/',
    icon: TypescriptPlain,
  },
  {
    name: 'React',
    knowledge: 81,
    color: '#61DAFB',
    description: 'A JavaScript library for building user interfaces.',
    href: 'https://reactjs.org/',
    icon: ReactOriginal,
  },
  {
    name: 'Redux',
    knowledge: 70,
    color: '#764ABC',
    description: 'A predictable state container for JavaScript apps.',
    href: 'https://redux.js.org/',
    icon: ReduxOriginal,
  },
  {
    name: 'Next.js',
    knowledge: 90,
    color: '#666666',
    description: 'A React framework for production. Used in this portfolio.',
    href: 'https://nextjs.org/',
    icon: NextjsOriginal,
  },
  {
    name: 'Vue.js',
    knowledge: 61,
    color: '#4FC08D',
    description:
      'A JavaScript framework for building user interfaces. Got no projects using Vue.js but had some abandoned.',
    href: 'https://vuejs.org/',
    icon: VuejsOriginal,
  },
  {
    name: 'NestJS',
    knowledge: 73,
    color: '#E0234E',
    description:
      'A progressive Node.js framework for building efficient, reliable and scalable server-side applications.',
    href: 'https://nestjs.com/',
    icon: NestjsPlain,
  },
  {
    name: 'Python',
    knowledge: 51,
    color: '#3776AB',
    description: 'Not using python anywhere but at college/to help my friends with their projects.',
    href: 'https://www.python.org/',
    icon: PythonOriginal,
  },
  {
    name: 'Rust',
    knowledge: 36,
    color: '#666666',
    description: "I'm learning Rust and I'm loving it so far.",
    href: 'https://www.rust-lang.org/',
    icon: RustPlain,
  },
];
