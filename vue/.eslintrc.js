/* eslint-disable linebreak-style */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'arrow-body-style': ['off'],
    'linebreak-style': ['error', 'windows'],
    'max-len': ['error', { code: 256 }],
    'no-console': ['warn', { allow: ['log', 'warn', 'error'] }],
    'no-param-reassign': ['off'],
    'no-plusplus': ['off'],
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_', args: 'none' }],
    'object-shorthand': ['off'],
  },
};
