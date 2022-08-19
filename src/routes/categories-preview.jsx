import { useSelector } from "react-redux";
import { Fragment } from "react";

import CategroyPreiview from "../components/CategoryPreview";
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../store/categories/category.selector";
import Spinner from "../components/Spinner/Spinner.component";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => (
          <CategroyPreiview
            key={title}
            title={title}
            products={categoriesMap[title]}
          />
        ))
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
