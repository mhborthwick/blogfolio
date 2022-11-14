import React from 'react'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from '../theme'
import ReactDOM from 'react-dom/client'
import Home from './Home'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Home />
    </ChakraProvider>
  </React.StrictMode>
)
