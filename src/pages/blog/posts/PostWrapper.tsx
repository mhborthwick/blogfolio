import { Flex, Heading, Text } from '@chakra-ui/react'
import { Layout } from '../../../components'
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
      <Flex as="main" direction="column" mt="4rem" flex="1 1">
        <Heading>{field.title}</Heading>
        <Text>{field.createdAt.toDateString()}</Text>
        <MDXWrapper>{children}</MDXWrapper>
      </Flex>
    </Layout>
  )
}

export default PostWrapper
