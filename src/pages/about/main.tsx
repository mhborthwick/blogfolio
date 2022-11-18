import React from 'react'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from '../../theme'
import ReactDOM from 'react-dom/client'
import About from './About'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <About />
    </ChakraProvider>
  </React.StrictMode>
)
