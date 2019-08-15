module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    indent: ['error', 2],
    'max-len': ['off'],
    'linebreak-style': ['off'],
    'func-names': ['off'],
    'space-before-function-paren': ['error', 'never'],
    'space-before-blocks': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'object-shorthand': ['error', 'always'],
    'no-param-reassign': ['off'],
    'one-var': ['error', 'consecutive'],
    'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
    'no-cond-assign': ['off'],
  },
};
