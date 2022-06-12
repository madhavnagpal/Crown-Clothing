import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled/macro";

import { selectCategoriesMap } from "../store/categories/category.selector";
import ProductCard from "../components/ProductCard";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <StyledContainer>
      <StyledTitle>{category?.toUpperCase()}</StyledTitle>
      <StyledPreview>
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </StyledPreview>
    </StyledContainer>
  );
};

export default Category;

const StyledContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  marginBottom: "30px",
});

const StyledTitle = styled("h2")({
  fontSize: "38px",
  marginBottom: "25px",
  textAlign: "center",
});

const StyledPreview = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  columnGap: "20px",
  rowGap: "40px",
});
