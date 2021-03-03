import { useRef, useState } from "react";
import { Flex, IconButton } from "@chakra-ui/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import ProductCard from "./product-card";

import useWidthObserver from "../custom-hooks/use-width-observer";

export default function ProductsCarousel() {
  const [moveX, setMoveX] = useState(0);

  const outerContainerRef = useRef(null);
  const innerContainerRef = useRef(null);
  const slideRef = useRef(null);

  const [outerContainerWidth] = useWidthObserver(outerContainerRef);
  const [innerContainerWidth] = useWidthObserver(innerContainerRef);
  const [slideWidth] = useWidthObserver(slideRef);

  const slideForward = () => {
    setMoveX((prevMoveX) =>
      prevMoveX >= innerContainerWidth - outerContainerWidth
        ? innerContainerWidth - outerContainerWidth
        : prevMoveX + slideWidth
    );
  };

  const slideBackward = () => {
    setMoveX((prevMoveX) => (prevMoveX >= slideWidth ? prevMoveX - slideWidth : 0));
  };

  return (
    <Flex ref={outerContainerRef} alignItems="center" position="relative" maxW="container.xl" overflow="hidden">
      <Flex
        ref={innerContainerRef}
        movex={moveX}
        boxShadow="base"
        transform={`translateX(-${moveX}px)`}
        transition="all 0.3s ease-out"
      >
        <ProductCard ref={slideRef} />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Flex>
      <IconButton
        aria-label="Go to previous item"
        icon={<IoIosArrowBack />}
        colorScheme="primary"
        visibility={moveX === 0 || moveX < slideWidth ? "hidden" : "initial"}
        position="absolute"
        left={2}
        borderRadius="full"
        onClick={slideBackward}
      />
      <IconButton
        aria-label="Go to next item"
        icon={<IoIosArrowForward />}
        colorScheme="primary"
        visibility={moveX >= innerContainerWidth - outerContainerWidth ? "hidden" : "initial"}
        position="absolute"
        right={2}
        borderRadius="full"
        onClick={slideForward}
      />
    </Flex>
  );
}
