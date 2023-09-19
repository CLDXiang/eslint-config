module.exports = {
  extends: [
    '@cldxiang/eslint-config-basic',
    '@antfu/eslint-config-ts',
  ],
  rules: {
    // basic
    'import/order': ['error', {
      'groups': ['builtin', 'external', 'unknown', 'internal', 'parent', 'index', 'sibling', 'object', 'type'],
      'newlines-between': 'never',
      'alphabetize': { order: 'asc', caseInsensitive: true },
    }],
    'antfu/if-newline': 'off',

    // ts
    '@stylistic/js/brace-style': 'off',
    '@stylistic/ts/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    '@typescript-eslint/no-empty-function': 'warn',
  },
}
