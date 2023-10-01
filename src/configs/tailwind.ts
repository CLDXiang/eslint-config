import { pluginTailwind } from '../plugins'
import type { FlatESLintConfigItem } from '@antfu/eslint-config'

export function tailwind(): FlatESLintConfigItem[] {
  return [
    {
      name: 'cldxiang:tailwind',
      plugins: {
        tailwindcss: pluginTailwind,
      },
      rules: {
        'tailwindcss/classnames-order': 'warn',
        'tailwindcss/enforces-negative-arbitrary-values': 'warn',
        'tailwindcss/enforces-shorthand': 'warn',
        'tailwindcss/no-arbitrary-value': 'off',
        'tailwindcss/no-contradicting-classname': 'error',
      },
    },
  ]
}
