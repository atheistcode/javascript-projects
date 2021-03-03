import { IconButton, Input, InputGroup, InputRightElement, Select } from "@chakra-ui/react";
import { MdSearch } from "react-icons/md";

export default function SearchBar() {
  return (
    <InputGroup maxW="3xl" color="primary.900">
      <Input
        placeholder="Search..."
        variant="filled"
        borderTopRightRadius={{ lg: "none" }}
        borderBottomRightRadius={{ lg: "none" }}
        _focus={{ bgColor: "white" }}
      />
      <Select
        variant="filled"
        d={{ base: "none", lg: "inline-block" }}
        w="md"
        mr={10}
        borderRadius="none"
        _focus={{
          bgColor: "white",
        }}
      >
        <option value="option1">All Categories</option>
        <option value="option2">Camera & Photo</option>
        <option value="option3">Computers & Accessories</option>
        <option value="option3">Headphones</option>
        <option value="option3">Phones & Accessories</option>
        <option value="option3">TV & Video</option>
      </Select>
      <InputRightElement
        children={
          <IconButton
            aria-label="Search Store"
            icon={<MdSearch />}
            colorScheme="primary"
            borderLeftRadius="none"
            fontSize="2xl"
          />
        }
      />
    </InputGroup>
  );
}
