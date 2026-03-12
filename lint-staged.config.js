/**
 * @see https://github.com/lint-staged/lint-staged#configuration
 * @type {import('lint-staged').Configuration}
 */
const config = {
  '*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}': [
    'prettier --write',
    'eslint --fix --no-warn-ignored --max-warnings 0',
  ],
  '*.{md,css,scss,html}': ['prettier --write'],
};

export default config;
