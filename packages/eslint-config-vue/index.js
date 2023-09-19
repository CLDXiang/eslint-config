module.exports = {
  extends: [
    '@antfu/eslint-config-vue',
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

    // vue
    'vue/require-prop-types': 'warn',
    'vue/require-default-prop': 'warn',
    'vue/multi-word-component-names': 'warn',
    'vue/prefer-import-from-vue': 'warn',
    'vue/no-v-text-v-html-on-component': 'warn',
    'vue/no-dupe-keys': 'warn',
    'vue/brace-style': ['error', '1tbs', { allowSingleLine: true }],
  },
}
