import { Box, Flex, Heading, Image, Stack } from '@chakra-ui/react'
import image from './mike-photo-1.png'
import Content from './Content.mdx'
import { motion } from 'framer-motion'
import config from '../../utils/motion/config'

const MDXWrapper = (props: any) => <div className="mdx-about" {...props} />

function About() {
  return (
    <Stack
      direction={{ sm: 'column-reverse', md: 'row' }}
      data-test-id="about-section"
    >
      <Box
        mr={{ sm: 0, md: 10 }}
        as={motion.div}
        initial={config.INITIAL}
        animate={config.ANIMATE}
        transition={config.TRANSITION}
      >
        <Heading lineHeight="1.75">Software Engineer</Heading>
        <MDXWrapper>
          <Content />
        </MDXWrapper>
      </Box>
      <Flex
        justifyContent="flex-start"
        direction="column"
        flexShrink="0"
        as={motion.div}
        initial={config.INITIAL}
        animate={config.ANIMATE}
        transition={config.TRANSITION}
      >
        <Image
          borderRadius="full"
          boxSize="130px"
          src={image}
          alt="Mike Borthwick"
        />
      </Flex>
    </Stack>
  )
}

export default About
