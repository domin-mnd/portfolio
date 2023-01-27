# Portfolio

![Portfolio Screenshot](/public/works/portfolio.png)

## About portfolio

This work is my new portfolio site built with [Next.js](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/) & [Mantine](https://mantine.dev/). A website presents a single page application with carousel consisting of sections presented in the header.

> Note: This project is still in development and has serious bugs. Overall you shouldn't use it under any circumstances. Even if you want to, some sections are not ready yet.

## Installation

To run this project locally, you need to have [Node.js](https://nodejs.org/en/) installed on your machine:

```bash
git clone https://github.com/Domin-MND/portfolio . # clone the repository into the current directory
npm install # for the dependencies installation
npm run build # for the production build
npm start # start the server
```

else you can deploy it on [Vercel](https://vercel.com/) by using its CLI tool:

```bash
npm i -g vercel # install the Vercel CLI tool
vercel # deploy the project
```

## Configuration

You can configure the project by editing the `config.tsx` files in the following components:
- `components/header/config.tsx` (for the header section)
- `components/footer/config.tsx` (for the footer section)
- `components/works/config.tsx` (for the works section)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is under [MIT](https://choosealicense.com/licenses/mit/) license. You can freely use it for your own purposes.