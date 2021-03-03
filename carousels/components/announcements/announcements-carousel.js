import { useEffect, useState } from "react";
import { Box, Flex, IconButton } from "@chakra-ui/react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import Announcement from "./announcement";

const announcements = [
  {
    title: "Introducing: the Headphones Collection",
    text: "Discover our selection of the best headphones of the year",
    imageUrl: "https://cdn.shopify.com/s/files/1/0065/3095/7363/files/slide-1-headphones_1800x.jpg?v=1560283265",
    button: {
      text: "Shop All Headphones",
      href: "#",
    },
  },
  {
    title: "New JBL Portable Speakers",
    text: "Discover the brand new speakers, by JBL",
    imageUrl: "https://cdn.shopify.com/s/files/1/0065/3095/7363/files/Slide-10-desktop_2800x_1_1800x.jpg?v=1590837962",
    button: {
      text: "Shop JBL Clip 3",
      href: "#",
    },
  },
  {
    title: "Introducing brand new OLED TVs",
    text: "SDiscover all the masterpieces, selected by Warehouse",
    imageUrl: "https://cdn.shopify.com/s/files/1/0065/3095/7363/files/Slide-3-desktop_1800x.jpg?v=1559490253",
    button: {
      text: "Shop OLED TVs",
      href: "#",
    },
  },
  {
    title: "The best performing products in the world",
    text: "Our mission is to provide the best experience in the audio/video industry",
    imageUrl: "https://cdn.shopify.com/s/files/1/0065/3095/7363/files/Slide_4_desktop_1800x.jpg?v=1559495951",
    button: {
      text: "Shop All",
      href: "#",
    },
  },
];

const alignAnnouncements = ["flex-start", "center", "flex-end", "center"];

export default function AnnouncementsCarousel() {
  const [moveX, setMoveX] = useState(0);

  const slideNext = () => {
    setMoveX((prevMoveX) =>
      prevMoveX > announcements.length * -100 + 100
        ? prevMoveX + -100
        : prevMoveX === announcements.length * -100 + 100
        ? 0
        : announcements.length * -100 + 100
    );
  };

  const slidePrevious = () => {
    setMoveX((prevMoveX) =>
      prevMoveX !== 0 ? prevMoveX + 100 : prevMoveX === 0 ? announcements.length * -100 + 100 : 0
    );
  };

  const goToSlide = (index) => {
    setMoveX(index * -100);
  };

  const autoSlide = () => {
    const intervalId = setInterval(slideNext, 3000);
  };

  useEffect((intervalId) => {
    autoSlide();

    return clearInterval(intervalId);
  }, []);

  return (
    <Flex alignItems="center" position="relative" w="full" h={{ base: "md", md: "lg" }} overflow="hidden">
      <Flex w="full" h="inherit" transform={`translateX(${moveX}%)`} transition="all 0.5s ease">
        {announcements.map((item, index) => (
          <Announcement
            key={index}
            announcement={item}
            contentAlignment={
              index <= alignAnnouncements.length - 1
                ? alignAnnouncements[index]
                : alignAnnouncements[index - alignAnnouncements.length]
            }
          />
        ))}
      </Flex>
      <IconButton
        aria-label="Go to previous announcement"
        icon={<IoIosArrowBack />}
        position="absolute"
        left="0"
        size="xs"
        h={20}
        borderRadius="none"
        bgColor="whiteAlpha.500"
        onClick={slidePrevious}
      />
      <Flex justifyContent="center" position="absolute" bottom={6} w="full" cursor="pointer">
        {announcements.map((_, index) => (
          <Box
            key={index}
            aria-label="Go to announcement"
            w={3}
            h={3}
            mx={2}
            border="3px solid white"
            borderRadius="full"
            bgColor={moveX / 100 === index || moveX / 100 === -index ? "gray.500" : "white"}
            onClick={() => goToSlide(index)}
          />
        ))}
      </Flex>
      <IconButton
        aria-label="Go to next announcement"
        icon={<IoIosArrowForward />}
        position="absolute"
        right="0"
        size="xs"
        h={20}
        borderRadius="none"
        bgColor="whiteAlpha.500"
        onClick={slideNext}
      />
    </Flex>
  );
}
