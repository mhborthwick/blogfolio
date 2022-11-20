import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  SimpleGrid
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import metaFields from './metaFields'
import { motion } from 'framer-motion'
import config from '../../utils/motion/config'

function Portfolio() {
  return (
    <Box
      mt="2rem"
      as={motion.div}
      initial={config.INITIAL}
      animate={config.ANIMATE}
      transition={config.TRANSITION}
    >
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={2}>
        {metaFields.map((m) => {
          return (
            <Card key={m.id}>
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
                      target="_blank"
                      rightIcon={<ExternalLinkIcon />}
                    >
                      Demo
                    </Button>
                  )}
                  <Button
                    as="a"
                    href={m.source}
                    target="_blank"
                    rightIcon={<ExternalLinkIcon />}
                  >
                    Source
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          )
        })}
      </SimpleGrid>
    </Box>
  )
}

export default Portfolio
