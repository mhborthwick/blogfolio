import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import metaFields from './metaFields'
import { Layout } from '../../components'

function Blog() {
  return (
    <Layout>
      <Flex as="main" direction="column" mt="4rem" flex="1 1">
        {metaFields.map((m) => {
          return (
            <Flex key={m.id} direction="column" mb="2rem">
              <Heading as="h2">{m.title}</Heading>
              <Text>{m.createdAt.toDateString()}</Text>
              <Flex className="description">
                <Text>
                  {m.description}{' '}
                  <Box as="span" className="read-more">
                    <Link href={m.url}>
                      Read more <ArrowForwardIcon />
                    </Link>
                  </Box>
                </Text>
              </Flex>
            </Flex>
          )
        })}
      </Flex>
    </Layout>
  )
}

export default Blog
