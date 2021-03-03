import { Box, Button, Circle, Flex, Icon } from "@chakra-ui/react";
import { MdExpandMore, MdShoppingCart } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";

export default function UserInfo() {
  return (
    <Flex alignItems="center" ml={4}>
      <Flex direction="column" mr={4}>
        <Box as="span" color="gray.400">
          Login / Signup
        </Box>
        <Button variant="link" rightIcon={<Icon as={MdExpandMore} w={5} h={5} />} colorScheme="primary" color="white">
          My Account
        </Button>
      </Flex>
      <Flex as="button" alignItems="center" mr={2}>
        <Icon as={IoMdHeartEmpty} fontSize="3xl" />
        <Circle w={6} h={6} mt={-8} ml={-3} bgColor="brand.red" fontSize="sm" fontWeight="semibold">
          15
        </Circle>
      </Flex>
      <Flex as="button" alignItems="center">
        <Icon as={MdShoppingCart} fontSize="3xl" />
        <Circle w={6} h={6} mt={-8} ml={-3} bgColor="brand.red" fontSize="sm" fontWeight="semibold">
          15
        </Circle>
      </Flex>
    </Flex>
  );
}
