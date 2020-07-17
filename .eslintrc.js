module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 0,
    'react-hooks/rules-of-hooks': 'error',
    'no-console': 'warn',
    'jsx-a11y/anchor-is-valid': 0,
  },
  plugins: ['react', 'import', 'jsx-a11y', 'react-hooks'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
