import { type FlatConfigItem, interopDefault } from '@antfu/eslint-config'

export async function tailwind(): Promise<FlatConfigItem[]> {
  return [
    {
      name: 'cldxiang:tailwind',
      plugins: {
        // @ts-expect-error missing types
        tailwindcss: await interopDefault(import('eslint-plugin-tailwindcss')),
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
