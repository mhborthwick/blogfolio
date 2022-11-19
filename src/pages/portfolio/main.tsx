import React from 'react'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from '../../theme'
import ReactDOM from 'react-dom/client'
import Portfolio from './Portfolio'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Portfolio />
    </ChakraProvider>
  </React.StrictMode>
)
