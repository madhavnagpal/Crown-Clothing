import { useNavigate } from "react-router-dom";
import {
  CategoryItemContainer,
  BackgroundImage,
  CategoryItemBody,
  Title,
  Description,
} from "./CategoryItem.styles";

const CategoryItem = ({ category }) => {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);
  return (
    <CategoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <CategoryItemBody>
        <Title>{title}</Title>
        <Description>Shop Now</Description>
      </CategoryItemBody>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
