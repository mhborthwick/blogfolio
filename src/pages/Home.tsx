import { Flex } from '@chakra-ui/react'
import { About, Layout, Portfolio } from '../components'

function Home() {
  return (
    <Layout>
      <Flex as="main" direction="column" mt="4rem">
        {/* TODO: Fix mailto address */}
        <About />
        <Portfolio />
      </Flex>
    </Layout>
  )
}

export default Home
