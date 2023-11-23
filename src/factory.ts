import antfu, { combine } from '@antfu/eslint-config'
import { isPackageExists } from 'local-pkg'
import { tailwind, toml } from './configs'
import type { OptionsConfig } from './types'
import type { FlatConfigItem } from '@antfu/eslint-config'

export async function cldxiang(options: OptionsConfig & FlatConfigItem = {}, ...userConfigs: (FlatConfigItem | FlatConfigItem[])[]): Promise<FlatConfigItem[]> {
  const { tailwind: enableTailwind = isPackageExists('tailwindcss'), toml: enableToml = true, stylistic: enableStylistic = true } = options
  const configs: FlatConfigItem[][] = []

  const isNuxtExists = isPackageExists('nuxt')

  if (enableTailwind) configs.push(await tailwind())

  if (enableToml) configs.push(await toml())

  return combine(
    ...await antfu({
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
