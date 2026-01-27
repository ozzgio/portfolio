import NextLink from "next/link";
import { useColorModeValue } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray.700", "whiteAlpha.800");
  const activeBg = useColorModeValue("orange.50", "orange.900");
  const hoverBg = useColorModeValue("orange.50", "orange.800");
  
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      px={3}
      borderRadius="md"
      fontWeight={active ? "semibold" : "medium"}
      color={active ? "orange.500" : inactiveColor}
      target={target}
      position="relative"
      transition="background-color 0.2s ease-in-out, color 0.2s ease-in-out, transform 0.2s ease-in-out"
      sx={{
        // Explicitly set transition only for specific properties, excluding fontWeight
        transition: "background-color 0.2s ease-in-out, color 0.2s ease-in-out, transform 0.2s ease-in-out",
        fontWeight: active ? "semibold" : "medium",
        ...(active
          ? {
              bg: activeBg,
              _before: {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: "60%",
                height: "2px",
                bg: "orange.500",
                borderRadius: "full",
              },
            }
          : {}),
      }}
      _hover={{
        bg: hoverBg,
        color: "orange.500",
        textDecoration: "none",
        transform: "translateY(-1px)",
      }}
      _active={{
        bg: activeBg,
        transform: "translateY(0)",
      }}
      {...props}
    >
      {children}
    </Link>
  );
};

export default LinkItem;
