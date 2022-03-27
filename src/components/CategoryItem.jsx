import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled/macro";

const CategoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <CategoryBox>
      <BackgroundImageBox sx={{ backgroundImage: `url(${imageUrl})` }} />
      <CategoryBodyBox>
        <TitleTypography variant="h4" component="h2">
          {title}
        </TitleTypography>
        <SubTypography variant="body1">Shop Now</SubTypography>
      </CategoryBodyBox>
    </CategoryBox>
  );
};

export default CategoryItem;

const BackgroundImageBox = styled(Box)({
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
});

const CategoryBodyBox = styled(Box)({
  height: "90px",
  padding: "0 25px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid black",
  background: "white",
  opacity: "0.7",
  position: "absolute",
  borderRadius: "2px",
});

const TitleTypography = styled(Typography)({
  fontWeight: "bold",
  textTransform: "uppercase",
  margin: "0 6px 0",
  fontSize: "22px",
  color: "#4a4a4a",
});

const SubTypography = styled(Typography)({
  fontWeight: "lighter",
  fontSize: "16px",
});

const CategoryBox = styled(Box)({
  minWidth: "30%",
  height: "240px",
  flex: "1 1 auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid black",
  margin: "0 7.5px 15px",
  overflow: "hidden",
  "&:hover": {
    cursor: "pointer",
    [`${BackgroundImageBox}`]: {
      transform: "scale(1.1)",
      transition: "transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95)",
    },
    [`${CategoryBodyBox}`]: {
      opacity: "0.9",
    },
  },
  "&:first-child": {
    marginRight: "7.5px",
  },
  "&:last-child": {
    marginLeft: "7.5px",
  },
});
