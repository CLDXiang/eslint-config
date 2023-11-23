import type { OptionsConfig as AntfuOptionsConfig } from '@antfu/eslint-config'

export type OptionsConfig = AntfuOptionsConfig & {
  /**
   * Enable Tailwind CSS support.
   *
   * @default auto-detect based on the dependencies
   */
  tailwind?: boolean
  /**
   * Enable TOML support.
   *
   * @default auto-detect true
   */
  toml?: boolean
}
