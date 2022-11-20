import { Box, Link, ListItem, UnorderedList } from '@chakra-ui/react'

function DesktopNav() {
  return (
    <Box as="nav" m="auto 0">
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
  )
}

export default DesktopNav
