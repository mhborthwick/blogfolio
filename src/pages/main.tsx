import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import ReactDOM from "react-dom/client";
import Home from "./Home";
// import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  </React.StrictMode>
);
