import { Flex, Icon, Link, Text } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";

function Footer() {
  return (
    <Flex as="footer" p="2rem" justifyContent="center">
      <Flex direction="column">
        <Text>Made by Mike Borthwick</Text>
        <Link href="https://github.com/mhborthwick" m="0 auto" isExternal>
          <Icon as={AiFillGithub} w={8} h={8} />
        </Link>
      </Flex>
    </Flex>
  );
}

export default Footer;
