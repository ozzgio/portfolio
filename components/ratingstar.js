import { HStack, Icon, Box } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const RatingStar = ({ rating, max = 5, ...props }) => {
  const value = typeof rating === "string" ? parseFloat(rating) : rating;
  return (
    <HStack spacing={0.25} alignItems="center" {...props}>
      {Array.from({ length: max }).map((_, i) => {
        if (i + 1 <= value) {
          return <Icon as={StarIcon} key={i} color="orange.400" boxSize={5} />;
        } else if (i < value && value < i + 1) {
          return (
            <Box key={i} position="relative" boxSize={5} display="inline-block">
              <Icon
                as={StarIcon}
                color="orange.400"
                boxSize={5}
                position="absolute"
                left={0}
                zIndex={1}
                style={{ clipPath: "inset(0 50% 0 0)" }}
              />
              <Icon
                as={StarIcon}
                color="gray.300"
                boxSize={5}
                position="absolute"
                left={0}
                zIndex={0}
              />
            </Box>
          );
        } else {
          return <Icon as={StarIcon} key={i} color="gray.300" boxSize={5} />;
        }
      })}
    </HStack>
  );
};

export default RatingStar;
