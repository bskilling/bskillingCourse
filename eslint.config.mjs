import { FlatCompat } from '@eslint/compat';
import js from '@eslint/js';
import next from 'eslint-plugin-next';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-plugin-prettier';

const compat = new FlatCompat();

export default [
  js.configs.recommended,
  next.configs.recommended,
  react.configs.recommended,
  reactHooks.configs.recommended,
  ...compat.extends('plugin:prettier/recommended'),
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      next,
      react,
      reactHooks,
      prettier,
    },
    rules: {
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'no-unused-vars': 'warn',
      'no-console': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
