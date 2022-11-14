import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../../../../theme";
import Content from "./Content.mdx";
import PostWrapper from "../PostWrapper";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <PostWrapper id={1}>
        <Content />
      </PostWrapper>
    </ChakraProvider>
  </React.StrictMode>
);
