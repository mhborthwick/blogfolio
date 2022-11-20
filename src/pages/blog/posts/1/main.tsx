import '@fontsource/inter/400.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from '../../../../theme'
import Content from './Content.mdx'
import PostWrapper from '../PostWrapper'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <PostWrapper id={1}>
        <Content />
      </PostWrapper>
    </ChakraProvider>
  </React.StrictMode>
)
