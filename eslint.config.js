import eslint from '@eslint/js';
import vitest from '@vitest/eslint-plugin';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tsESLint from 'typescript-eslint';

const config = defineConfig([
  {
    name: 'source-code',
    files: ['src/**/*.ts', 'tests/**/*.ts'],
    extends: [
      eslint.configs.recommended,
      tsESLint.configs.recommended,
      eslintConfigPrettier,
    ],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    name: 'source-code-tests',
    files: ['tests/**/*.ts'],
    extends: [vitest.configs.recommended],
  },
  {
    name: 'config-files-module',
    files: ['**/*.js'],
    extends: [eslint.configs.recommended, eslintConfigPrettier],
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
    },
  },
  {
    name: 'config-files-commonjs',
    files: ['**/*.cjs'],
    extends: [eslint.configs.recommended, eslintConfigPrettier],
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        ...globals.node,
      },
    },
  },
  // ignore files
  globalIgnores([
    '.github/**',
    '.husky/**',
    '.idea/**',
    '**/bin/',
    '**/dist/',
    '**/package-lock.json',
  ]),
]);

export default config;
