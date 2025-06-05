import { forwardRef } from "react";
import Logo from "./logo";
import LinkItem from "./linkitem";
import NextLink from "next/link";
import {
  Container,
  Box,
  Stack,
  Heading,
  Link,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "./themebutton";

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
));

const NavBar = (props) => {
  const { path } = props;
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      style={{ backdropFilter: "blur(10px)" }}
      zIndex={10}
      top={0}
      left={0}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW={"container.md"}
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/articles" path={path}>
            Articles
          </LinkItem>
          <LinkItem href="/books" path={path}>
            Books
          </LinkItem>
          <LinkItem href="/projects" path={path}>
            Projects
          </LinkItem>
          <LinkItem href="/contacts" path={path}>
            Contacts
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https://github.com/ozzgio/portfolio"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            Source Code
          </LinkItem>
        </Stack>
        <Box flex={1} align="right">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem as={MenuLink} href="/articles">
                  Articles
                </MenuItem>
                <MenuItem as={MenuLink} href="/books">
                  Books
                </MenuItem>
                <MenuItem as={MenuLink} href="/projects">
                  Projects
                </MenuItem>
                <MenuItem as={MenuLink} href="/contacts">
                  Contacts
                </MenuItem>
                <MenuItem
                  as={MenuLink}
                  href="https://github.com/ozzgio/portfolio/"
                >
                  Source Code
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NavBar;
