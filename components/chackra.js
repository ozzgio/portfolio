import { ChakraProvider, localStorageManager } from "@chakra-ui/react";
import theme from "../libs/theme";

export default function Chakra({ children }) {
  const colorModeManager =
    typeof cookies === "string"
      ? cookieStorageManagerSSR(cookies)
      : localStorageManager;

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  );
}
