import { useContext } from "react";
import styled from "@emotion/styled/macro";

import ProductCard from "../components/ProductCard";
import { ProductsContext } from "../contexts/products.context";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <StyledProductsContainer>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </StyledProductsContainer>
  );
};

export default Shop;

const StyledProductsContainer = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  columnGap: "10px",
  rowGap: "50px",
});
