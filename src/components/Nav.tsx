import { Box, Link, ListItem, UnorderedList } from "@chakra-ui/react";

function Nav() {
  return (
    <Box as="nav" m="auto 0">
      <UnorderedList display="flex" flexDirection="row">
        <ListItem listStyleType="none">
          <Link href="/about" ml="1rem">
            About
          </Link>
        </ListItem>
        <ListItem listStyleType="none">
          <Link href="/portfolio" ml="1rem">
            Portfolio
          </Link>
        </ListItem>
      </UnorderedList>
    </Box>
  );
}

export default Nav;
