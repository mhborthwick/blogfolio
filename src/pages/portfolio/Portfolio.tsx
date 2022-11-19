import {
  Badge,
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Text
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Layout from '../../components/Layout'
import metaFields from './metaFields'

function Portfolio() {
  return (
    <Layout>
      <Flex as="main" direction="column" mt="4rem" flex="1 1">
        {metaFields.map((m) => {
          return (
            <Card key={m.id} mb="2rem">
              <CardHeader>
                <Heading as="h2" lineHeight="1.5">
                  {m.title}
                </Heading>
                {m.technologies.map((t, i) => {
                  return (
                    <Badge key={i} mr="1">
                      {t}
                    </Badge>
                  )
                })}
              </CardHeader>
              <CardBody>
                <Text>{m.description}</Text>
              </CardBody>
              <CardFooter>
                <ButtonGroup>
                  {m.demo !== null && (
                    <Button
                      as="a"
                      href={m.demo}
                      rightIcon={<ExternalLinkIcon />}
                    >
                      Demo
                    </Button>
                  )}
                  <Button
                    as="a"
                    href={m.source}
                    rightIcon={<ExternalLinkIcon />}
                  >
                    Source
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          )
        })}
      </Flex>
    </Layout>
  )
}

export default Portfolio
