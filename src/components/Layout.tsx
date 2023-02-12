import { Box } from '@chakra-ui/react'
import { SkipNavLink, SkipNavContent } from '@chakra-ui/skip-nav'
import React from 'react'
import { Footer, Header } from '.'

interface Props {
  children?: React.ReactNode
}

function Layout({ children }: Props) {
  return (
    <>
      <Box maxW="133.8rem" m="0 auto" p="2rem" minH="100vh">
        <SkipNavLink zIndex="999" id="content">
          Skip to content
        </SkipNavLink>
        <Header />
        <SkipNavContent id="content" />
        <Box
          m="0 auto"
          p={['0rem', '0rem', '4rem']}
          display="flex"
          justifyContent={'center'}
        >
          {children}
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default Layout
