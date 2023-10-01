import antfu from '@antfu/eslint-config'
import type { OptionsConfig } from '@antfu/eslint-config'

export default function cldxiang(...args: Parameters<typeof antfu>): ReturnType<typeof antfu> {
  const [options = {}] = args
  const isStylisticDisabled = options.stylistic === false
  const myOptions: OptionsConfig = {
    ...options,
    overrides: {
      ...options.overrides,
      javascript: {
        'import/order': ['error', {
          'groups': ['builtin', 'external', 'unknown', 'internal', 'parent', 'index', 'sibling', 'object', 'type'],
          'newlines-between': 'never',
          'alphabetize': { order: 'asc', caseInsensitive: true },
        }],
        'antfu/if-newline': 'off',
        ...options.overrides?.javascript,
      },
      typescript: {
        'ts/no-empty-function': 'warn',
        ...options.overrides?.typescript,
      },
      vue: {
        'vue/require-prop-types': 'warn',
        'vue/require-default-prop': 'warn',
        'vue/multi-word-component-names': 'warn',
        'vue/prefer-import-from-vue': 'warn',
        'vue/no-v-text-v-html-on-component': 'warn',
        'vue/no-dupe-keys': 'warn',
        ...isStylisticDisabled
          ? {}
          : {
              'vue/brace-style': ['error', '1tbs', { allowSingleLine: true }],
            },
        ...options.overrides?.vue,
      },
    },
  }
  return antfu(...[myOptions, isStylisticDisabled
    ? {}
    : {
        rules: {
          'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
        },
      }, ...args.slice(1)] as Parameters<typeof antfu>)
}
