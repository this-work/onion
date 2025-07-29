import type { Breakpoint } from './defaultProps'

export type AspectRatios = {
  [breakpoint in Breakpoint]: string
}

export interface CSSObject {
  [cssAttribute: string]: string | boolean | number | undefined
}

export interface CSSClassObject {
  [className: string]: boolean
}
