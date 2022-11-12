import { Box } from "@chakra-ui/react";
import React from "react";
import Header from "./Header";

type Props = {
  children?: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <Box maxW="1280px" m="0 auto" p="2rem">
      <Header />
      {children}
    </Box>
  );
}

export default Layout;
