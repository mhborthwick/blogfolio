import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import Home from "./Home";
// import "./index.css";

const theme = extendTheme({
  styles: {
    global: {
      ".read-more": {
        a: {
          color: "teal.500",
          _hover: {
            textDecoration: "underline",
          },
        },
      },
      ".description": {
        p: {
          lineHeight: "1.75",
          mt: "1.25em",
          mb: "1.25em",
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  </React.StrictMode>
);
