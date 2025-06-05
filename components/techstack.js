import {
  Tag,
  Wrap,
  WrapItem,
  useColorModeValue,
  Image,
  Box,
} from "@chakra-ui/react";
import technologyData from "../libs/technologyData";

const TechStack = ({ stack }) => {
  const tagBgColor = useColorModeValue("tagBg.default", "tagBg._dark");
  const tagTextColor = useColorModeValue("tagText.default", "tagText._dark");

  if (!stack || stack.length === 0) {
    return null;
  }

  // Flatten all technologies from technologyData into a single array for easier lookup
  const allTechnologies = Object.values(technologyData).flatMap(
    (category) => category.technologies
  );

  return (
    <Wrap spacing={1} justify="flex-start">
      {stack.map((techName, idx) => {
        const tech = allTechnologies.find((t) => t.name === techName);
        return (
          <WrapItem key={idx}>
            <Tag
              size="md"
              colorScheme="orange"
              bg={tagBgColor}
              color={tagTextColor}
              borderRadius="full"
              px={3}
              py={1}
              fontWeight="semibold"
            >
              {tech?.image && (
                <Box mr={2} display="flex" alignItems="center">
                  <Image src={tech.image} alt={tech.name} boxSize="16px" />
                </Box>
              )}
              {techName}
            </Tag>
          </WrapItem>
        );
      })}
    </Wrap>
  );
};

export default TechStack;
