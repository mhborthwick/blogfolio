import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../../../../theme";
import ReactDOM from "react-dom/client";
import Post from "./Post";
// import "../../../index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Post />
    </ChakraProvider>
  </React.StrictMode>
);
