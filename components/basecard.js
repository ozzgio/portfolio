import { Box, useColorModeValue, useTheme } from "@chakra-ui/react";

const BaseCard = ({ children, ...props }) => {
  const { colors } = useTheme();
  const cardBg = useColorModeValue(
    "linear-gradient(135deg, #fff7ed 0%, #ffe5d0 100%)", // light theme
    "linear-gradient(135deg, #23272f 0%, #2d3748 100%)" // dark theme
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
      p={5}
      shadow="lg"
      maxW="350px"
      w="100%"
      mx="auto"
      borderColor={cardBorder}
      transition="transform 0.2s, box-shadow 0.2s, border-color 0.2s"
      _hover={{
        transform: "translateY(-10px) scale(1.04)",
        boxShadow: "2xl",
        borderColor: "orange.400",
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default BaseCard;
