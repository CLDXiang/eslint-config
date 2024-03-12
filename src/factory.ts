import antfu, { combine } from '@antfu/eslint-config'
import { isPackageExists } from 'local-pkg'
import { tailwind } from './configs'
import type { OptionsConfig } from './types'
import type { FlatConfigItem, OptionsTypescript, UserConfigItem } from '@antfu/eslint-config'

export async function cldxiang(options: OptionsConfig & FlatConfigItem = {}, ...userConfigs: (UserConfigItem | UserConfigItem[])[]): Promise<UserConfigItem[]> {
  const { tailwind: enableTailwind = isPackageExists('tailwindcss'), stylistic: enableStylistic = true } = options
  const configs: UserConfigItem[][] = []

  const isNuxtExists = isPackageExists('nuxt')

  if (enableTailwind) configs.push(await tailwind())

  let typescriptOptions: false | OptionsTypescript
  if (options.typescript === false) typescriptOptions = false
  else if (options.typescript === true || options.typescript === undefined) typescriptOptions = {}
  else typescriptOptions = options.typescript
  if (typescriptOptions) {
    typescriptOptions.overrides = {
      'ts/no-empty-function': 'warn',
      ...typescriptOptions.overrides,
    }
  }

  let vueOptions: false | OptionsTypescript
  if (options.vue === false) vueOptions = false
  else if (options.vue === true || options.vue === undefined) vueOptions = {}
  else vueOptions = options.vue
  if (vueOptions) {
    vueOptions.overrides = {
      'vue/require-prop-types': 'warn',
      'vue/require-default-prop': 'warn',
      'vue/multi-word-component-names': isNuxtExists ? 0 : 'warn',
      'vue/prefer-import-from-vue': 'warn',
      'vue/no-v-text-v-html-on-component': 'warn',
      'vue/no-dupe-keys': 'warn',
      ...(enableStylistic
        ? { 'vue/brace-style': ['error', '1tbs', { allowSingleLine: true }] }
        : {}),
      ...vueOptions.overrides,
    }
  }

  return combine(
    ...await antfu({
      ...options,
      typescript: typescriptOptions,
      vue: vueOptions,
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
