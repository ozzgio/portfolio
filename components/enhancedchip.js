import { Box, VStack, Text, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";

const EnhancedChip = ({ tech, delay = 0 }) => {
  const bg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const hoverBg = useColorModeValue("gray.50", "gray.700");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <Box
        bg={bg}
        borderWidth="1px"
        borderColor={borderColor}
        borderRadius="lg"
        p={6}
        width={["100px", "140px"]}
        height={["100px", "140px"]}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        flexShrink={0}
        flexGrow={0}
        transition="all 0.3s ease"
        _hover={{
          bg: hoverBg,
          shadow: "lg",
        }}
        cursor="pointer"
      >
        <VStack spacing={2} flex={1} justify="center">
          <Box
            position="relative"
            width="100%"
            height="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image
              src={tech.image}
              alt={tech.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "contain" }}
            />
          </Box>
          <Text
            fontSize="sm"
            fontWeight="semibold"
            textAlign="center"
            lineHeight="1.2"
          >
            {tech.name}
          </Text>
        </VStack>
      </Box>
    </motion.div>
  );
};

export default EnhancedChip;
