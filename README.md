# Summary

This is a draft, static website developed using React (TypeScript) which will be used to present information about and promote the Paper Volleyball game, which will hopefully released on Steam in 2026 following the completion of development, incorporation and marketing phases.

# Deployment

## Testing
To test the website locally, call `npm run dev` on the terminal from the project directory and open http://localhost:5173 to view it in your browser.\
The page will reload when you make changes.\
You may also see any lint errors in the console.

## Publishing
This website is configured to automatically publish on Github pages whenever a push is made to the main branch.\
The built app should be placed in the `docs\` folder. As such, a batch script `.\build.bat` was written to automatically call `npm run build` and move the files into the `docs\` folder.


<details>
<summary>Additional information</summary>

# Appendix

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

</details>