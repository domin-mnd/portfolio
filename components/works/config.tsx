// Assets for banner images
import portfolio from '@public/works/portfolio.png';
import splendid from '@public/works/splendid.png';
import todoTracker from '@public/works/todo-tracker.png';
import profileCard from '@public/works/profile-card.png';
import slova from '@public/works/slova.png';
import knrtukaiDiscordBot from '@public/works/knrtu-kai-discord-bot.png';
import kaiJs from '@public/works/kai.js.png';
import cvet from '@public/works/cvet.png';

/** An array of projects displayed in works section as cards */
export const projects: Project[] = [
  {
    title: 'Portfolio',
    description:
      'My personal portfolio website consisting of my projects, skill stack and contact information. This is what you visit right now.',
    banner: portfolio,
    stack: [
      {
        name: 'Next.js',
        color: 'black',
      },
      {
        name: 'React',
        color: 'cyan',
      },
      {
        name: 'TypeScript',
        color: 'blue',
      },
      {
        name: 'Mantine',
        color: 'indigo',
      },
      {
        name: 'Three.js',
        color: 'green',
      },
    ],
    url: 'https://github.com/Domin-MND/portfolio',
  },
  {
    title: 'Splendid',
    description:
      'Hybrid CMS extending framework power by its extensible codebase. Provides a completely new view on CMS.',
    banner: splendid,
    stack: [
      {
        name: 'NestJS',
        color: 'red',
      },
      {
        name: 'Next.js',
        color: 'black',
      },
      {
        name: 'React',
        color: 'cyan',
      },
      {
        name: 'TypeScript',
        color: 'blue',
      },
      {
        name: 'Prisma',
        color: 'gray',
      },
      {
        name: 'Mantine',
        color: 'indigo',
      },
    ],
    url: 'https://github.com/splendid-cms/main/tree/rewrite',
  },
  {
    title: 'Todo tracker',
    description:
      'A minimalistic todo app built with Vue.js and Tailwind CSS. Uses firebase for authentication and database.',
    banner: todoTracker,
    stack: [
      {
        name: 'Vue.js',
        color: 'teal.9',
      },
      {
        name: 'Tailwind CSS',
        color: 'cyan',
      },
      {
        name: 'Firebase',
        color: 'orange',
      },
    ],
    url: 'https://github.com/Domin-MND/todo-tracker',
  },
  {
    title: 'Profile Card',
    description:
      "A simple profile card made similar to discord's profile card. Is considered my first project in web development.",
    banner: profileCard,
    stack: [
      {
        name: 'HTML',
        color: 'orange',
      },
      {
        name: 'SASS',
        color: 'pink',
      },
      {
        name: 'TypeScript',
        color: 'blue',
      },
    ],
    url: 'https://github.com/Domin-MND/profile-card',
  },
  {
    title: 'Slova',
    description:
      'A placeholder tool for generating non-existing speakable words. Great tool if you want to look at your product from a different angle.',
    banner: slova,
    stack: [
      {
        name: 'TypeScript',
        color: 'blue',
      },
      {
        name: 'Jest',
        color: 'green',
      },
    ],
    url: 'https://github.com/RaydanOMGr/slova',
  },
  {
    title: 'KNRTU-KAI Discord Bot',
    description:
      'A Discord bot for KNRTU-KAI university. It provides a lot of useful features for students and teachers.',
    banner: knrtukaiDiscordBot,
    stack: [
      {
        name: 'Sapphire',
        color: 'blue.9',
      },
      {
        name: 'TypeScript',
        color: 'blue',
      },
      {
        name: 'Prisma',
        color: 'gray',
      },
    ],
    url: 'https://github.com/supersetkai/discord-bot',
  },
  {
    title: 'Kai.js',
    description:
      'A small modern API wrapper of the KNRTU-KAI website written for Node.js. It is used in the KNRTU-KAI Discord Bot.',
    banner: kaiJs,
    stack: [
      {
        name: 'JavaScript',
        color: 'yellow',
      },
    ],
    url: 'https://github.com/supersetkai/kai.js',
  },
  {
    title: 'Cvet',
    description:
      'An effecient color tool for customizing and picking colors for projects without any hesitation.',
    banner: cvet,
    stack: [
      {
        name: 'TypeScript',
        color: 'blue',
      },
      {
        name: 'Jest',
        color: 'green',
      },
    ],
    url: 'https://github.com/Domin-MND/cvet',
  },
];
