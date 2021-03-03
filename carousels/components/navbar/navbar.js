import { Center, Flex, Heading, Icon, IconButton, Link, Text } from "@chakra-ui/react";
import { MdImportantDevices } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";

import SearchBar from "./search-bar";
import UserInfo from "./user-info";
import NavList from "./nav-list";

export default function Navbar() {
  return (
    <>
      <Center bgColor="white">
        <Flex justifyContent="space-between" maxW="container.xl" w="full" px={2} py={1} whiteSpace="nowrap">
          <Text as="span" d={{ base: "none", md: "inline-block" }}>
            &#10031; Welcome to Worldwide Electronics Store
          </Text>
          <Text as="span" ml="auto">
            &#10003; Free shipping on all orders over $50
          </Text>
        </Flex>
      </Center>

      <Center bgColor="primary.900" color="white">
        <Flex justifyContent="space-between" alignItems="center" maxW="container.xl" w="full" px={2} py={5}>
          <IconButton
            aria-label="Toggle main navigation menu"
            icon={<IoMdMenu />}
            variant="unstyled"
            d={{ base: "inline-block", md: "none" }}
            mr={2}
            fontSize="3xl"
          />

          <Link href="#" d="flex" alignItems="center" mr={4}>
            <Icon as={MdImportantDevices} mr="2" color="primary.200" fontSize="3xl" />
            <Heading size="md" whiteSpace="nowrap">
              E-TECH
            </Heading>
          </Link>

          <SearchBar />

          <UserInfo />
        </Flex>
      </Center>

      <NavList d={{ base: "none", md: "flex" }} />
    </>
  );
}
