import React from "react";
import { Link } from 'react-router-dom';
import './categorycard.css';
import Base64Image2 from "../Base64image2";

const CategoryCard = ({ category }) => {
  return (
    <div className="category-card">
      <Link to={`/category/${category.name}`}>
      <figure>
        <Base64Image2 base64Image2={category.image} className="image" />
        </figure>
        <figcaption>{category.name}</figcaption>
      </Link>
    </div>
  );
};

export default CategoryCard;
