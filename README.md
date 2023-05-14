# Portfolio

![Portfolio Screenshot](/public/works/portfolio.png)

## About portfolio

This work is my new portfolio site built with [Next.js](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/), [Three.js](https://threejs.org/) & [Mantine](https://mantine.dev/). A website presents a single page application with carousel consisting of sections presented in the header.

## Installation

To run this project locally, you need to have [Node.js](https://nodejs.org/en/) installed on your machine:

```bash
git clone https://github.com/Domin-MND/portfolio . # clone the repository into the current directory
npm i -g pnpm # package manager
pnpm install # for the dependencies installation
pnpm build # for the production build
pnpm start # start the server
```

else you can deploy it on [Vercel](https://vercel.com/) by using its CLI tool:

```bash
npm i -g vercel # install the Vercel CLI tool
vercel # deploy the project
```

## Configuration

You can configure the project by editing the `config.tsx` files in the following components:

- `components/about/config.tsx` (for the About card)
- `components/contact/config.tsx` (for the Contact card)
- `components/footer/config.tsx` (for the footer component)
- `components/header/config.tsx` (for the header component)
- `components/help/config.tsx` (for i18n help link)
- `components/translations/config.tsx` (for translation list, also configure `next-i18next.config.js` locales)
- `components/skills/config.tsx` (for the Skills card)
- `components/works/config.tsx` (for the Works card)

## i18n

This project supports i18n. If no translation is provided to the language - it will take the config information from the above tsx files. The english default translation folder must be named `en` and should never be deleted but may be modified.

## Documentation

All the available documentation regarding the creation & maintainability of the project is in `docs` folder & in configuration/component code comments.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Contributors

Huge thanks to these wonderful people for their contributions:

<table>
  <tbody>
    <tr>
      <td>
        <a href="https://github.com/RaydanOMGr">
          <img alt="RaydanOMGr" src="https://avatars.githubusercontent.com/u/73817645" width="64" />
        </a>
      </td>
      <td>
        <a href="https://github.com/RaydanOMGr">
          <strong>RaydanOMGr</strong><br />
        </a>
        Translated portfolio to german
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://discordapp.com/users/929046591657086986">
          <img alt="Len#2832" src="https://cdn.discordapp.com/attachments/947837208474288158/1073596324311728148/IMG_20230210_212820.jpg" width="64" />
        </a>
      </td>
      <td>
        <a href="https://discordapp.com/users/929046591657086986">
          <strong>Len#2832</strong><br />
        </a>
        Translated portfolio to indonesian
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://discordapp.com/users/667677528218927105">
          <img alt="yung_heheh#0430" src="https://cdn.discordapp.com/avatars/667677528218927105/539e93675ad7226fe2099b7ae593ea9b.png" width="64" />
        </a>
      </td>
      <td>
        <a href="https://discordapp.com/users/667677528218927105">
          <strong>yung_heheh#0430</strong><br />
        </a>
        Translated portfolio to polish & helped with testing the web
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://discord.gg/AaS4dwVHyA">
          <img alt="djoh" src="https://avatars.githubusercontent.com/u/68508885" width="64" />
        </a>
      </td>
      <td>
        <a href="https://discord.gg/AaS4dwVHyA">
          <strong>djoh</strong><br />
        </a>
        Translated portfolio to ukrainian
      </td>
    </tr>
  </tbody>
</table>

> **Note**: If you wish to help translate the portfolio to your language, please join the [Crowdin project](https://crowdin.com/project/domins-portfolio).

## License

This project is under [MIT](https://choosealicense.com/licenses/mit/) license. You can freely use it for your own purposes.
