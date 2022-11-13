// import "../../../blog/Blog.css";
import { Flex, Heading, Text } from "@chakra-ui/react";
import Layout from "../../../../components/Layout";
import metaFields, { type MetaField } from "../../metaFields";
import Content from "./Content.mdx";

function getMetaField(fields: MetaField[], id: number) {
  const field = fields.find((f) => f.id === id);
  if (field === undefined) {
    throw new Error(`Couldn't find field with id: ${id}`);
  }
  return field;
}

const MDXWrapper = (props: any) => <div className="mdx" {...props} />;

function Post() {
  const field = getMetaField(metaFields, 1);
  return (
    <Layout>
      <Flex as="main" direction="column" mt="4rem" flex="1 1">
        <Heading>{field.title}</Heading>
        <Text>{field.createdAt.toDateString()}</Text>
        <MDXWrapper>
          <Content />
        </MDXWrapper>
      </Flex>
    </Layout>
  );
}

export default Post;
