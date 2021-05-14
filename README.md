# Nuxt Template

## Nuxt + Tailwind + FontAwesome + Google Fonts

This project includes a complete ready-to-go template of Nuxt, including Tailwind CSS, FontAwesome icons, and Google Fonts.

Furthermore, some basic components are already included as well:

- Link
- Button
- Headings
- Paragraph
- Rounded corner box
- Icons

I have no documentation of those elements yet, but you can check out the [demo](/pages/demo.vue) page, where the elements are included.

I also made an [example page](/pages/jokes.vue) on how to consume a REST API (thanks [FrancescoXX](https://github.com/FrancescoXX) for the suggestion!)

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## FontAwesome
If you want to use FontAwesome, you have to add your FontAwesome NPM Auth Token to the `.env` file. Copy the  [dotenv-example file](/dotenv-example) and paste your key in there.

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
