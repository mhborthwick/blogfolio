import { Flex, Show } from "@chakra-ui/react";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import SiteTitle from "./SiteTitle";

function Header() {
  return (
    <Flex as="header" justify="space-between">
      <SiteTitle />
      <Show below="md">
        <MobileNav />
      </Show>
      <Show above="md">
        <DesktopNav />
      </Show>
    </Flex>
  );
}

export default Header;
