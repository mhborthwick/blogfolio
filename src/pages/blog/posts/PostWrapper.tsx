import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Layout } from '../../../components'
import config from '../../../utils/motion/config'
import metaFields, { type MetaField } from '../metaFields'

function getMetaField(fields: MetaField[], id: number) {
  const field = fields.find((f) => f.id === id)
  if (field === undefined) {
    throw new Error(`Couldn't find field with id: ${id}`)
  }
  return field
}

const MDXWrapper = (props: any) => <div className="mdx-post" {...props} />

interface Props {
  id: number
  children?: React.ReactNode
}

function PostWrapper({ id, children }: Props) {
  const field = getMetaField(metaFields, id)
  return (
    <Layout>
      <Flex
        as="main"
        direction="column"
        mt="4rem"
        flex="1 1"
        data-test-id="post-section"
      >
        <Box
          as={motion.div}
          initial={config.INITIAL}
          animate={config.ANIMATE}
          transition={config.TRANSITION}
        >
          <Heading>{field.title}</Heading>
          <Text>{field.createdAt.toDateString()}</Text>
          <MDXWrapper>{children}</MDXWrapper>
        </Box>
      </Flex>
    </Layout>
  )
}

export default PostWrapper
