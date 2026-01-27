import { Box, useColorModeValue, useTheme } from "@chakra-ui/react";

const BaseCard = ({ children, ...props }) => {
  const { colors } = useTheme();
  const cardBg = useColorModeValue(
    "white",
    "gray.800"
  );
  const cardBorder = useColorModeValue(
    colors.cardBorder.default,
    colors.cardBorder._dark
  );

  return (
    <Box
      bg={cardBg}
      borderWidth="2px"
      borderRadius="2xl"
      p={6}
      shadow="xl"
      maxW="350px"
      w="100%"
      mx="auto"
      borderColor={cardBorder}
      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
      _hover={{
        transform: "translateY(-8px) scale(1.02)",
        boxShadow: "2xl",
        borderColor: "orange.400",
        _dark: { borderColor: "orange.500" },
      }}
      position="relative"
      overflow="hidden"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "4px",
        bgGradient: "linear(to-r, orange.400, orange.600)",
        _dark: { bgGradient: "linear(to-r, orange.500, orange.700)" },
        opacity: 0,
        transition: "opacity 0.3s",
      }}
      _hover={{
        _before: {
          opacity: 1,
        },
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default BaseCard;
