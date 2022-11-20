import {
  Button,
  Box,
  Flex,
  IconButton,
  Show,
  useColorMode
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { CiDark, CiLight } from 'react-icons/ci'
import { MobileNav, DesktopNav } from '.'
import config from '../utils/motion/config'

function Header() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Flex as="header" justify="space-between">
      <Show below="md">
        <MobileNav />
      </Show>
      <Show above="md">
        <DesktopNav />
      </Show>
      <Box
        as={motion.div}
        initial={config.INITIAL}
        animate={config.ANIMATE}
        transition={config.TRANSITION}
      >
        <Button
          onClick={toggleColorMode}
          display="flex"
          as={IconButton}
          aria-label="Options"
          icon={
            colorMode === 'light' ? (
              <CiDark size="1.5em" />
            ) : (
              <CiLight size="1.5em" />
            )
          }
          variant="unstyled"
          _hover={{
            background: 'transparent'
          }}
        />
      </Box>
    </Flex>
  )
}

export default Header
