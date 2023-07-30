import {
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  Link,
  useDisclosure
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
        style={{ minHeight: '2rem' }}
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
              href="/blog"
              mt="1.25em"
              mb="1.25em"
              _hover={{ textDecoration: 'none' }}
            >
              Blog
            </Link>
            <Divider />
            <Link
              href="https://github.com/mhborthwick"
              target="_blank"
              mt="1.25em"
              mb="1.25em"
              _hover={{ textDecoration: 'none' }}
            >
              GitHub
            </Link>
            <Divider />
            <Link
              href="mailto:mhborthwick%20*at*%20gmail%20-dot-%20com"
              mt="1.25em"
              mb="1.25em"
              _hover={{ textDecoration: 'none' }}
            >
              Contact
            </Link>
            <Divider />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default MobileNav
