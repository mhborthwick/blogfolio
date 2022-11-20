import { extendTheme } from '@chakra-ui/react'
import breakpoints from './foundations/breakpoints'
import fonts from './foundations/fonts'
import styles from './styles'
import config from './config'

const overrides = {
  breakpoints,
  fonts,
  styles,
  config
}

const theme = extendTheme(overrides)

export default theme
