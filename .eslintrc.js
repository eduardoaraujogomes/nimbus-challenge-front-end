module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:react/all',
    'eslint:all',
    'airbnb',
    'plugin:jsx-a11y/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: [
    'react', 'import', 'jsx-a11y',
  ],
  rules: {
    'react/prop-types': 0,
    indent: ['error', 2],
    'linebreak-style': 1,
    'react/no-unstable-nested-components': 'off',
    'react/no-namespace': 'off',
    'react/prefer-exact-props': 'off',
    'react/no-arrow-function-lifecycle': 'off',
    'react/no-invalid-html-attribute': 'off',
    quotes: ['error', 'single'],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
