import { useContext } from "react";

import CategroyPreiview from "../components/CategoryPreview";
import { CategoriesContext } from "../contexts/categories.context";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

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
