import { Grid, Heading } from "@chakra-ui/react";

import Navbar from "../components/navbar/navbar";
import AnnouncementsCarousel from "../components/announcements/announcements-carousel";
import ProductsCarousel from "../components/products-carousel";
import CategoryAdCard from "../components/category-ad-card";

export default function Home() {
  return (
    <>
      <Navbar />
      <AnnouncementsCarousel />
      <main>
        <Heading as="h6" size="sm" mb={4} color="primary.700">
          On-sale Products
        </Heading>
        <CategoryAdCard />
        <ProductsCarousel />
      </main>
    </>
  );
}
