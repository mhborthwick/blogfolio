import { Box } from '@chakra-ui/react'
import React from 'react'
import Footer from './Footer'
import Header from './Header'

interface Props {
  children?: React.ReactNode
}

function Layout({ children }: Props) {
  return (
    <>
      <Box maxW="42rem" m="0 auto" p="2rem" minH="100vh">
        <Header />
        {children}
      </Box>
      <Footer />
    </>
  )
}

export default Layout
