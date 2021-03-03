import { Box, Center, Link, List, ListItem } from "@chakra-ui/react";

export default function NavList(props) {
  return (
    <Center h={14} m="auto" bgColor="primary.700" color="white" {...props}>
      <Box as="nav" maxW="container.xl" w="full" px={2} whiteSpace="nowrap">
        <List d="flex">
          <ListItem>
            <Link href="#" mr={4}>
              All Categories
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#" mr={4}>
              New Arrivals
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#" mr={4}>
              Best Sellers
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#" mr={4}>
              Deals
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#" mr={4}>
              Brands
            </Link>
          </ListItem>
          <ListItem ml="auto">
            <Link href="#" mr={4}>
              Help
            </Link>
          </ListItem>
        </List>
      </Box>
    </Center>
  );
}
