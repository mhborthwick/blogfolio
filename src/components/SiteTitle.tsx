import { Heading, Link } from "@chakra-ui/react";

function SiteTitle() {
  return (
    <Heading as="h1">
      <Link href="/" _hover={{ textDecoration: "none" }}>
        MB
      </Link>
    </Heading>
  );
}

export default SiteTitle;
