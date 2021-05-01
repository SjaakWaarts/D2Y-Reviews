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
    'no-unused-vars': ['warn'],
    'linebreak-style': ['error', 'windows'],
    'max-len': ['error', { code: 256 }],
    'no-plusplus': ['off'],
    'arrow-body-style': ['off'],
    'no-param-reassign': ['off'],
  },
};
