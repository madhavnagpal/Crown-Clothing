import { useSelector } from "react-redux";

import CategroyPreiview from "../components/CategoryPreview";
import { selectCategoriesMap } from "../store/categories/category.selector";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <>
      {Object.keys(categoriesMap).map((title) => (
        <CategroyPreiview
          key={title}
          title={title}
          products={categoriesMap[title]}
        />
      ))}
    </>
  );
};

export default CategoriesPreview;
