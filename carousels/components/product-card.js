import React from "react";
import { Box, Flex, Icon, IconButton, Image, Link, Text } from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdAddShoppingCart } from "react-icons/md";

const product = {
  title: "Sony XBR-950G BRAVIA 4K HDR Ultra HD TV",
  imageUrl:
    "https://cdn.shopify.com/s/files/1/0065/3095/7363/products/sonyxbr55front_f72cc8ff-fcd6-4141-b9cc-e1320f867785_500x.jpg?v=1570074258",
  brand: "Sony",
  price: 1398,
  discount: {
    isDiscounted: true,
    percent: "20%",
  },
  reviews: {
    count: "6",
  },
  rating: "4.5",
  stockCount: 55,
};

const ProductCard = React.forwardRef((props, ref) => {
  return (
    <Flex ref={ref} direction="column" p={5} boxShadow="xs" borderRadius="none" bgColor="white">
      <Link color="gray.500" fontSize="xs" textTransform="uppercase">
        {product.brand}
      </Link>
      <Link maxW={52} mb={1} color="primary.600" fontSize="sm" fontWeight="semibold">
        {product.title}
      </Link>
      <Image
        src={product.imageUrl}
        alt={product.title}
        fallbackSrc="https://via.placeholder.com/200"
        maxW={52}
        maxH={52}
        mb={1}
      />
      <Text as="span" mb={2} color="primary.300" fontSize="lg" fontWeight="medium">
        ${Number(product.price).toLocaleString()}
      </Text>
      <Flex alignItems="center" mb={2}>
        <Flex mr={2}>
          {Array(5)
            .fill(<Icon as={AiFillStar} color="gray.300" />)
            .map((_, index) => {
              if (index < Math.floor(product.rating)) {
                return <Icon key={index} as={AiFillStar} color="orange.300" />;
              } else {
                return <Icon key={index} as={AiFillStar} color="gray.300" />;
              }
            })}
        </Flex>
        <Text as="span" color="gray.500" fontSize="xs">
          {product.reviews.count} {product.reviews.count > 1 ? "reviews" : "review"}
        </Text>
      </Flex>
      <Box mb={4}>
        {product.stockCount > 0 ? (
          <Text as="span" color="green.500" fontSize="sm" fontWeight="semibold">
            In stock, {product.stockCount} pieces
          </Text>
        ) : (
          <Text as="span" color="gray.500" fontSize="xs" fontWeight="semibold">
            Sold out
          </Text>
        )}
      </Box>
      <Flex>
        <IconButton
          aria-label="Add item to wishlist"
          icon={<IoMdHeartEmpty />}
          colorScheme="primary"
          bgColor="primary.100"
          mr={4}
          fontSize="2xl"
        />
        <IconButton
          aria-label="Add item to cart"
          icon={<MdAddShoppingCart />}
          colorScheme="primary"
          bgColor="primary.100"
          fontSize="2xl"
          disabled={product.stockCount === 0}
        />
      </Flex>
    </Flex>
  );
});

export default ProductCard;
