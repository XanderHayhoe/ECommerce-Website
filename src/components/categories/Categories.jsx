import React from "react";
import CategoryItem from "../category-item/CategoryItem";
import "./Categories.styles.scss";
const Categories = ({ categories }) => {
  return (
    <div className='directory-container'>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Categories;