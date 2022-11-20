import { Box, Link, ListItem, UnorderedList } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import config from '../../utils/motion/config'

function DesktopNav() {
  return (
    <Box as="nav" m="auto 0">
      <Box
        as={motion.div}
        initial={config.INITIAL}
        animate={config.ANIMATE}
        transition={config.TRANSITION}
      >
        <UnorderedList display="flex" flexDirection="row" ml="0">
          <ListItem listStyleType="none">
            <Link href="/" mr="1rem">
              Home
            </Link>
          </ListItem>
          <ListItem listStyleType="none">
            <Link href="/blog" mr="1rem">
              Blog
            </Link>
          </ListItem>
          <ListItem listStyleType="none">
            <Link href="#" mr="1rem">
              Resume
            </Link>
          </ListItem>
          <ListItem listStyleType="none">
            {/* TODO: Fix mailto address */}
            <Link href="mailto:email@example.com" mr="1rem">
              Contact
            </Link>
          </ListItem>
        </UnorderedList>
      </Box>
    </Box>
  )
}

export default DesktopNav
