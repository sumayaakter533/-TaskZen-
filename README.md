# -TaskZen-

## Initial Working Plan

- Setup the initial project.✅✅
- Build the project with Tailwind CSS. ✅✅
- Choose the design. ✅✅

---

## Step By Step Project Instructions

  1. Responsive side menu that will be open and close when click on the ham burger.

## Install Tailwind CSS Using POSTCSS with Vite

- `npm init -y`
- `npm install -D tailwindcss postcss autoprefixer vite`
- `npx tailwindcss init -p`
- create your own css file and keep the following code:
  - `@tailwind base;`
  - `@tailwind components;`
  - `@tailwind utilities;`
- To run the project - `npm run start`
- To build the project - `npm run build`

- **Extra:**
  - Add in tailwind.config.js - `content: ['*']`
  - Add in package.json

    ```json
    "scripts": {
          "start": "vite", // to run the project 
          "build": "vite build" // to build the project
      },

    ```

**NOTE:** *After build the project drag and drop the dist folder on Netlify to live the project.*

## Add daisyui

- `npm i -D daisyui@latest`
- Add in tailwind.config.js -

  ```js
   plugins: [
    require('daisyui'),
  ],
  ```

---

**Live link:** [taskzen-ui.netlify.app](https://taskzen-ui.netlify.app/)
