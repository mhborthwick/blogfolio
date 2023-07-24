import { Flex } from '@chakra-ui/react'
import { About, Layout, Portfolio } from '../components'

function Home() {
  return (
    <Layout>
      <Flex as="main" direction="column" mt="4rem">
        <About />
        <Portfolio />
      </Flex>
    </Layout>
  )
}

export default Home
