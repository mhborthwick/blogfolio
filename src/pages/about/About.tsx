import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Heading, Image } from '@chakra-ui/react'
import Layout from '../../components/Layout'
import image from '../@assets/vite.svg'
import Content from './Content.mdx'

const MDXWrapper = (props: any) => <div className="mdx-about" {...props} />

function About() {
  return (
    <Layout>
      <Box as="main" display={{ md: 'flex' }} mt="4rem">
        <Flex justifyContent="center" flexShrink="0" mb="1.5rem">
          <Image
            borderRadius="full"
            boxSize="100px"
            src={image}
            alt="Mike Borthwick"
          />
        </Flex>
        <Flex direction="column" justifyContent="center" ml={{ md: '2.5rem' }}>
          <Heading lineHeight="1.75">About Me</Heading>
          <MDXWrapper>
            <Content />
          </MDXWrapper>
          <Box>
            <Button as="a" href="/portfolio" rightIcon={<ArrowForwardIcon />}>
              Projects
            </Button>
          </Box>
        </Flex>
      </Box>
    </Layout>
  )
}

export default About
