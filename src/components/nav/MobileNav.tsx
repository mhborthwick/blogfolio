import {
  Divider,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  Link,
  useDisclosure,
  Button
} from '@chakra-ui/react'
import React, { type MutableRefObject } from 'react'
import { RiMenuFill } from 'react-icons/ri'

function MobileNav() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef() as MutableRefObject<HTMLButtonElement>

  return (
    <>
      <Button
        ref={btnRef}
        onClick={onOpen}
        as={IconButton}
        aria-label="Options"
        icon={<RiMenuFill size="1.5em" />}
        variant="link"
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        size="full"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <DrawerCloseButton size="lg" />
          </DrawerHeader>
          <DrawerBody
            display="flex"
            flexDirection="column"
            lineHeight="1.75"
            fontWeight="bold"
          >
            <Link
              href="/"
              mt="1.25em"
              mb="1.25em"
              _hover={{ textDecoration: 'none' }}
            >
              Home
            </Link>
            <Divider />
            <Link
              href="/about"
              mt="1.25em"
              mb="1.25em"
              _hover={{ textDecoration: 'none' }}
            >
              About
            </Link>
            <Divider />
            <Link
              href="/portfolio"
              mt="1.25em"
              mb="1.25em"
              _hover={{ textDecoration: 'none' }}
            >
              Portfolio
            </Link>
            <Divider />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default MobileNav
