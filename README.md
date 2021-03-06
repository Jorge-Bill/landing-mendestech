## MENDES TECNOLOGY

Project of mendes tecnology landing page using a react CRA custom structure.

This project was made thinking on fast and better productivity. So any change on the main structure repository can be pulled and apply to this child project.

---

## π« Deploy

[![Netlify Status](https://api.netlify.com/api/v1/badges/4649d379-760f-4e2e-a11d-df09216e019b/deploy-status)](https://app.netlify.com/sites/landing-mendestech/deploys)

---

## π Project Structure

This project structure a web app with great organizition, made to be the base template for other apps. Link of [base structure](https://github.com/Jorge-Bill/blog-cra).

---

## <a href="https://jorgemendes.com.br/"> π &nbsp; Acess the main blog </a>

---

<p align="center">
  <a href="https://jorgemendes.com.br/">
    <img src="https://raw.githubusercontent.com/Jorge-Bill/Jorge-Bill/master/assets/jorge.png">
  </a>
</p>

## πΎ Structure base Custom CRA

---

## π Project Structure

This project structure a web app with great organization, made to be the base template for other apps.

Stack and resources used on this structure creation.

    .
    βββ React CRA
    βββ prop-types
    βββ Eslint + eslint-config-airbnb + prettier
    βββ Plop component generator
    βββ Styled-components
    βββ Styled-icons
    βββ Styled-media-query
    βββ React-router-dom
    βββ Jest
    βββ Dotenv
    βββ Husky
    βββ Commitizen

## π  Scripts

- `yarn start` - start the app. open in [local](http://localhost:3000).
- `yarn generate` - execute the script to generate new components.
- `yarn build` - execute the script to build the application.
- `yarn test` - execute the Jest test suite.
- `yarn eject` - This is a one-way operation. Once you eject, you canβt go back - remove the single build dependency from your project.
- `yarn commit` - commit changes with Husky and commitizen | type `git commit` works too.
- `yarn lint` - use prettier to verify files on your app.
- `yarn format` - use prettier to format files on your app.

## βοΈ How to use the structure

For using the structure as a second origin use the follow lines:

- `git remote add structure git@github.com:Jorge-Bill/blog-cra.git`

On first time pull request

- `git pull structure HEAD:master --allow-unrelated-histories`

After the first pull request

- `git pull structure HEAD:master`

## πΎ SET Husky hoooks

- `yarn husky install`

If any of yours hook is not working, you can make them execute with:

- `yarn husky add .husky/hook-name`

## π₯ ENV VARIABLES

.env variables used for Seo component.

- `REACT_APP_TITLE=''`
- `REACT_APP_DESCRIPTION=''`
- `REACT_APP_LANG=''`
- `REACT_APP_IMAGE=''`
- `REACT_APP_AUTHOR=''`
- `REACT_APP_SITE_URL=''`

---
