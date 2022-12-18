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
      <Box maxW="42rem" m="0 auto" p="1rem" minH="100vh">
        <SkipNavLink zIndex="999" id="content">
          Skip to content
        </SkipNavLink>
        <Header />
        <SkipNavContent id="content" />
        {children}
      </Box>
      <Footer />
    </>
  )
}

export default Layout
