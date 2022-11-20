import { Flex, Icon, Link, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { AiFillGithub } from 'react-icons/ai'
import config from '../utils/motion/config'

function Footer() {
  return (
    <Flex as="footer" p="2rem" justifyContent="center">
      <Flex
        direction="column"
        as={motion.div}
        initial={config.INITIAL}
        animate={config.ANIMATE}
        transition={config.TRANSITION}
      >
        <Text>Made by Mike Borthwick</Text>
        <Link href="https://github.com/mhborthwick" m="0 auto" isExternal>
          <Icon as={AiFillGithub} w={8} h={8} />
        </Link>
      </Flex>
    </Flex>
  )
}

export default Footer
