import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import * as React from "react";
import "../styles/globals.css";
import customTheme from "../theme";

const App = ({ Component, pageProps }: AppProps): React.ReactNode => {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
