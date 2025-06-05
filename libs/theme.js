import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true,
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode("#f0e7db", "#202023")(props),
      },
    }),
  },
  components: {
    Heading: {
      variants: {
        "section-title": {
          textDecoration: "underline",
          fontSize: 20,
          textUnderlineOffset: 6,
          textDecorationColor: "#525252",
          textDecorationThickness: 4,
          marginTop: 3,
          marginBottom: 4,
        },
      },
    },
    Link: {
      baseStyle: (props) => ({
        color: mode("#0066ff", "#d24dff")(props),
        textUnderlineOffset: 3,
      }),
    },
  },
  fonts: {
    heading: "'M PLUS Rounded 1c'",
  },
  colors: {
    grassTeal: "#ff9933",
    // Add our semantic colors here
    cardBg: {
      default: "#ffffff", // Light mode default (fallback)
      _dark: "#1a202c", // Dark mode
    },
    cardBorder: {
      default: "#e2e8f0", // Light mode border
      _dark: "#4a5568", // Dark mode border
    },
    headingText: {
      default: "#2d3748", // Light mode heading
      _dark: "#ffffff", // Dark mode heading
    },
    bodyText: {
      default: "#718096", // Light mode text
      _dark: "#a0aec0", // Dark mode text
    },
    tagBg: {
      default: "#fff5f0",
      _dark: "#744210",
    },
    tagText: {
      default: "#dd6b20",
      _dark: "#f7fafc",
    },
  },
});

export default theme;
