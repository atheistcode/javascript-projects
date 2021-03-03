import { Box, Button, Center, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";

export default function Announcement({ announcement, contentAlignment }) {
  return (
    <Box position="relative" minW="full" bgColor="primary.50">
      <Image src={announcement.imageUrl} w="full" h="full" objectFit="cover" objectPosition="center" />
      <Center position="absolute" top="0" left="0" w="full" h="full" p={10} bgColor="blackAlpha.500" color="white">
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems={{ base: "center", md: contentAlignment }}
          maxW="container.xl"
          w="full"
          textAlign={{ base: "center", md: "initial" }}
        >
          <Heading mb={4}>{announcement.title}</Heading>
          <Text mb={6}>{announcement.text}</Text>
          <Link href={announcement.button.href}>
            <Button colorScheme="primary" size="lg">
              {announcement.button.text}
            </Button>
          </Link>
        </Flex>
      </Center>
    </Box>
  );
}
