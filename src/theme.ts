import { extendTheme } from "@chakra-ui/react";

// Let's say you want to add custom colors
const customTheme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: "dark",
  },
  sizes: {
    xxs: "4.5em",
    "2sm": "14.5em",
    xxl: "7em",
  },
  colors: {
    brand: {
      100: "#c90eb7",
      900: "#0c26ed",
    },
    gray: {
      700: "#181818",
      800: "#202020",
    },
  },
  breakpoints: {
    base: "0em",
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "83.5em",
    xsl: "93em",
    "2xl": "96em",
    xxl: "95em",
  },
});
export default customTheme;
