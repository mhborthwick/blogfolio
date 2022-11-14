import { extendTheme } from '@chakra-ui/react'
import styles from './styles'
import config from './config'

const overrides = {
  styles,
  config
}

const theme = extendTheme(overrides)

export default theme
