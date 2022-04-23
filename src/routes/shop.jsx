import { useContext } from "react";
import styled from "@emotion/styled/macro";

import ProductCard from "../components/ProductCard";
import { CategoriesContext } from "../contexts/categories.context";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categoriesMap).map((title) => (
        <div key={title}>
          <h2>{title}</h2>
          <StyledProductsContainer>
            {categoriesMap[title].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </StyledProductsContainer>
        </div>
      ))}
    </>
  );
};

export default Shop;

const StyledProductsContainer = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  columnGap: "10px",
  rowGap: "50px",
});
