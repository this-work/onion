import exportedCustomProperties from '../theme/export/index.module.scss'

/**
 * Get a CSS variable from the default theme
 */
export function useCssVar(name: string, prefix: string = '--') {
  return exportedCustomProperties[prefix + name]
}
