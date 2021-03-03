import Image from "next/image";
import { Flex, Text } from "@chakra-ui/react";

const CategoryAdCard = () => {
  return (
    <Flex position="relative" backgroundColor="#fc2a68">
      <Image src="/images/ad-tvs.jpg" alt="Televisons advertisement" width={224} height="auto" />
      <Flex position="absolute" w="full" h="full" backgroundColor="blackAlpha.400">
        <Text>Discover our TVs exclusive offers.</Text>
      </Flex>
    </Flex>
  );
};

export default CategoryAdCard;
