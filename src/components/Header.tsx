import { Button, Flex, IconButton, Show, useColorMode } from '@chakra-ui/react'
import { CiDark, CiLight } from 'react-icons/ci'
import MobileNav from './MobileNav'
import DesktopNav from './DesktopNav'

function Header () {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Flex as="header" justify="space-between">
      <Show below="md">
        <MobileNav />
      </Show>
      <Show above="md">
        <DesktopNav />
      </Show>
      <Button
        onClick={toggleColorMode}
        display="flex"
        as={IconButton}
        aria-label="Options"
        icon={
          colorMode === 'light'
            ? (
            <CiDark size="1.5em" />
              )
            : (
            <CiLight size="1.5em" />
              )
        }
        variant="unstyled"
        _hover={{
          background: 'transparent'
        }}
      />
    </Flex>
  )
}

export default Header
