import { Link } from "react-router-dom";
import styled from "@emotion/styled/macro";

import ProductCard from "./ProductCard";

const CategroyPreiview = ({ title, products }) => (
  <StyledContainer>
    <h2>
      <StyledTitle>
        <Link to={title}>{title.toUpperCase()}</Link>
      </StyledTitle>
    </h2>
    <StyledPreview>
      {products
        .filter((_, idx) => idx < 4)
        .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </StyledPreview>
  </StyledContainer>
);

export default CategroyPreiview;

const StyledContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  marginBottom: "30px",
});

const StyledTitle = styled("span")({
  fontSize: "28px",
  marginBottom: "25px",
  cursor: "pointer",
});

const StyledPreview = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  columnGap: "20px",
});
