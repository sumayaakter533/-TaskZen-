# -TaskZen-

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

---

**Live link:** [taskzen-ui.netlify.app](https://taskzen-ui.netlify.app/)
