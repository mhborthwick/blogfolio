import { Box, Flex, Heading, Image, Stack } from '@chakra-ui/react'
import image from './vite.svg'
import Content from './Content.mdx'

const MDXWrapper = (props: any) => <div className="mdx-about" {...props} />

function About() {
  return (
    <Stack direction={{ sm: 'column-reverse', md: 'row' }}>
      <Box mr={{ sm: 0, md: 10 }}>
        <Heading lineHeight="1.75">Mike Borthwick</Heading>
        <MDXWrapper>
          <Content />
        </MDXWrapper>
      </Box>
      <Flex justifyContent="flex-start" direction="column" flexShrink="0">
        <Image
          borderRadius="full"
          boxSize="100px"
          src={image}
          alt="Mike Borthwick"
        />
      </Flex>
    </Stack>
  )
}

export default About
