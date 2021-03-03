import { Grid } from "@chakra-ui/react";

import ProductCard from "./product-card";

export default function ProductsDirectory() {
  return (
    <Grid templateColumns="repeat(auto-fit, minmax(12rem, 1fr))">
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
      <ProductCard />
    </Grid>
  );
}
