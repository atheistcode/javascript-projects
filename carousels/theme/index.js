import { extendTheme } from "@chakra-ui/react";

// Global style overrides
import styles from "./styles";

// Foundational style overrides
import colors from "./foundations/colors";
import breakpoints from "./foundations/breakpoints";

// Component style overrides
import Button from "./components/button";
import Link from "./components/link";

const customizedTheme = {
  styles,
  colors,
  breakpoints,
  components: {
    Button,
    Link,
  },
};

const theme = extendTheme(customizedTheme);

export default theme;
