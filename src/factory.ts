import antfu, { combine } from '@antfu/eslint-config'
import { isPackageExists } from 'local-pkg'
import { tailwind } from './configs'
import type { OptionsConfig } from './types'
import type { FlatESLintConfigItem } from '@antfu/eslint-config'

export function cldxiang(options: OptionsConfig & FlatESLintConfigItem = {}, ...userConfigs: (FlatESLintConfigItem | FlatESLintConfigItem[])[]): FlatESLintConfigItem[] {
  const { tailwind: enableTailwind = isPackageExists('tailwindcss'), stylistic: enableStylistic = true } = options
  const configs: FlatESLintConfigItem[][] = []

  const isNuxtExists = isPackageExists('nuxt')

  if (enableTailwind) configs.push(tailwind())

  return combine(
    ...antfu({
      ...options,
      overrides: {
        ...options.overrides,
        typescript: {
          'ts/no-empty-function': 'warn',
          ...options.overrides?.typescript,
        },
        vue: {
          'vue/require-prop-types': 'warn',
          'vue/require-default-prop': 'warn',
          'vue/multi-word-component-names': isNuxtExists ? 0 : 'warn',
          'vue/prefer-import-from-vue': 'warn',
          'vue/no-v-text-v-html-on-component': 'warn',
          'vue/no-dupe-keys': 'warn',
          ...(enableStylistic
            ? { 'vue/brace-style': ['error', '1tbs', { allowSingleLine: true }] }
            : {}),
          ...options.overrides?.vue,
        },
      },
    }),
    ...configs,
    {
      rules: {
        'import/order': ['error', {
          'groups': ['builtin', 'external', 'unknown', 'internal', 'parent', 'index', 'sibling', 'object', 'type'],
          'newlines-between': 'never',
          'alphabetize': { order: 'asc', caseInsensitive: true },
        }],
        'antfu/if-newline': 'off',
        ...(enableStylistic
          ? { 'style/brace-style': ['error', '1tbs', { allowSingleLine: true }] }
          : {}),
      },
    },
    ...userConfigs,
  )
}
