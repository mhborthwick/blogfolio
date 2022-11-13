import { Heading, Link } from "@chakra-ui/react";

function SiteTitle() {
  return (
    <Heading as="h1">
      <Link href="/" _hover={{ textDecoration: "none" }}>
        Mike Borthwick
      </Link>
    </Heading>
  );
}

export default SiteTitle;
