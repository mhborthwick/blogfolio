import {
  Button,
  Box,
  Flex,
  IconButton,
  Show,
  useColorMode,
  Heading
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { CiDark, CiLight } from 'react-icons/ci'
import { MobileNav, DesktopNav } from '.'
import config from '../utils/motion/config'

function Header() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Flex as="header" justify="space-between">
      <Heading as="h1" style={{ fontSize: '1rem', alignSelf: 'center' }}>
        MIKE BORTHWICK
      </Heading>
      <Flex>
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
          {/* TODO: Figure out how to incorporate 
            dark / light mode into mobile display
          */}
          <Show above="md">
            <Button
              data-test-id="color-mode-toggle"
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
          </Show>
        </Box>
      </Flex>
    </Flex>
  )
}

export default Header
