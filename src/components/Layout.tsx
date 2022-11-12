import { Box } from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

type Props = {
  children?: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <>
      <Box maxW="1280px" m="0 auto" p="2rem" minH="100vh">
        <Header />
        {children}
      </Box>
      <Footer />
    </>
  );
}

export default Layout;
