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
          <Link href="/about" mr="1rem">
            About
          </Link>
        </ListItem>
        <ListItem listStyleType="none">
          <Link href="/portfolio" mr="1rem">
            Portfolio
          </Link>
        </ListItem>
      </UnorderedList>
    </Box>
  )
}

export default DesktopNav
