import {
  Box,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BiMenuAltRight } from "react-icons/bi";

function MobileNav() {
  return (
    <Box as="nav" m="auto 0">
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<BiMenuAltRight size="2em" />}
          variant="outline"
        />
        <MenuList>
          <MenuItem as="a" href="/about">
            About
          </MenuItem>
          <MenuItem as="a" href="/portfolio">
            Portfolio
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}

export default MobileNav;
