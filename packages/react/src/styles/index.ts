import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  radii,
  space,
  lineHeights,
} from '@tmowes-ignite-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  css,
  styled,
  keyframes,
  globalCss,
  getCssText,
  reset,
  config,
  createTheme,
  theme,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },
  theme: {
    colors,
    space,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    radii,
  },
})
