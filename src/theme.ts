import { extendTheme } from "@chakra-ui/react";

// Let's say you want to add custom colors
const customTheme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: "dark",
  },
  sizes: {
    xxs: "7em",
    xxs2: "14.5em",
  },
  colors: {
    brand: {
      100: "#c90eb7",
      900: "#0c26ed",
    },
  },
  components: {
    Flex: {},
    // Button:{
    //   base
    // }
  },
  breakpoints: {
    base: "0em",
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "83em",
    xsl: "93em",
    "2xl": "96em",
    xxl: "95em",
  },
});
export default customTheme;
