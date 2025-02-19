import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginReact from 'eslint-plugin-react'
// import pluginPrettier from 'eslint-plugin-prettier'
// import configPrettier from 'eslint-config-prettier'

/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginJs.configs.recommended, // ESLint's recommended JS config
  pluginReact.configs.flat.recommended, // React plugin's recommended config

  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: { globals: globals.browser }
  }

  // pluginPrettier.configs.recommended, // Prettier integration
  // configPrettier.rules // Prettier's rules
]
