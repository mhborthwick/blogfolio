import { extendTheme } from '@chakra-ui/react'
import breakpoints from './foundations/breakpoints'
import styles from './styles'
import config from './config'

const overrides = {
  breakpoints,
  styles,
  config
}

const theme = extendTheme(overrides)

export default theme
