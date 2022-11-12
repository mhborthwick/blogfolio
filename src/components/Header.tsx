import { Flex } from "@chakra-ui/react";
import Nav from "./Nav";
import SiteTitle from "./SiteTitle";

function Header() {
  return (
    <Flex as="header" justify="space-between">
      <SiteTitle />
      <Nav />
    </Flex>
  );
}

export default Header;
