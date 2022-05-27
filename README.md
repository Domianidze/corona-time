![Logo](./readme/assets/img/logo.png)

## Coronatime
 
Coronatime - is a platform where we can register, login (also reset password if we forgot) </br> 
and see what the situation is in the world today.

### Table of Contents

* [Prerequisites](#prerequisites)
* [Tech Stack](#tech-stack)
* [Resources](#resources)
* [Getting Started](#getting-started)
* [Testing](#testing)
* [Project Structure](#project-structure)
* [Deployment](#deployment)

### Prerequisites

* <img src="./readme/assets/img/nodejs.png" height="15px" style='padding-right: 5px'> *Node JS @16.14.2*
* <img src="./readme/assets/img/npm.png" height="15px" style='padding-right: 5px'/> *npm 8.5.0*

### Tech Stack

* <img src="./readme/assets/img/typescript.png" height="15"  style='padding-right: 5px'> [Typescript @4.6.4](https://www.typescriptlang.org/) - programming language
* <img src="./readme/assets/img/react.png" height="15"  style='padding-right: 5px'> [React @18.0.0](https://reactjs.org) - front-end framework
* <img src="./readme/assets/img/react-router.png" height="15"  style='padding-right: 5px'> [React Router @6.3.0](https://reactrouter.com/) - routing library
* <img src="./readme/assets/img/react-hook-form.png" height="15"  style='padding-right: 5px'> [React Hook Form @7.30.0](https://react-hook-form.com/) - form validation library
* <img src="./readme/assets/img/tailwind.png" height="15"  style='padding-right: 5px'> [Tailwind @3.0.24](https://tailwindcss.com/) - css framework
* <img src="./readme/assets/img/i18next.png" height="15"  style='padding-right: 5px'> [i18next @21.8.4](https://www.i18next.com/) - internationalization framework
* <img src="./readme/assets/img/cypress.png" height="15"  style='padding-right: 5px'> [Cypress  @9.6.0](https://www.cypress.io/) - end-to-end testing framework

### Resources

*  [Application Design (Figma)](https://www.figma.com/file/O9A950iYrHgZHtBuCtNSY8/Coronatime?node-id=0%3A1)
*  [API Specification](https://coronatime-api.devtest.ge/)
*  [Font [Inter]](https://fonts.google.com/specimen/Inter?query=Inter)
*  [Font [FiraGO]](https://bboxtype.com/typefaces/FiraGO/#!layout=specimen)
*  [Git Commit Rules](https://redberry.gitbook.io/resources/git-is-semantikuri-komitebi)

### Getting Started

1\. First of all clone the repository from github:
```sh
git clone https://github.com/RedberryInternship/coronatime-Domianidze
```

2\. Then install all the dependencies:
```sh
npm install
```

### Testing
Redberry Covid Questionnaire uses ``` @cypress ```  for testing.

you can run and view tests in the Cypress GUI. You can open the Cypress GUI  using the following commands:

1\. First of all start the dev server:
```sh
npm start
```

2\. Then open the Cypress GUI:
```sh
npx cypress open
```

### Project Structure

```bash
├─── cypress # cypress files
├─── readme # readme assets
├─── public # public files
├─── src # source codes
│   ├─── assets # images and fonts
│   ├─── components # reusable components
│   ├───├─── component-name.tsc # component
│   ├───├─── index.ts # export all components
│   ├─── config configuration files
│   ├───├─── config-name.ts # configuration file
│   ├─── pages # pages
│   ├───├─── page-folder # page folder
│   ├───├───├─── page-name.tsx # page component
│   ├───├───├─── index.ts # export default page
│   ├───├─── index.ts # export all pages
│   ├─── state # state managment files 
│   ├─── translations # translation files 
│   ├─── App.tsx # react app 
│   ├─── index.css # global styles 
│   ├─── index.tsx # index file 
│   ├─── react-app-env.d.ts # essentialtypes 
- .gitignore # git ignore file
- .babelrc.json # babel config file
- .eslintrc.json # eslint config file
- .prettierrc.json # prettier config file
- tailwind.config.js # tailwind config file
- postcss.config.js # postcss config file
- tsconfig.json # typescript config file
- package.json # dependency manager configurations
- package-lock.json # dependency manager configurations
```

### Deployment

We have a helper script which helps us in deployment.

Simply run this command to get deplyoment ready files in the  ``` public ```  folder:

```sh
npm run build
```
