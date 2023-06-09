import React, { useState, useEffect } from 'react';

const ProductList = ({ categoryName }) => {
    const [category, setCategory] = useState(null);

    useEffect(() => {
      fetch('http://localhost:3001/categories')
        .then((res) => res.json())
        .then((data) => {
          const categorieslist = data._embedded.categoryList;
          const selectedCategory = categorieslist.find((cat) => cat.name === categoryName.categoryName);
          console.log(data);
          setCategory(selectedCategory);
        })
        .catch((err) => console.log('err', err));
    }, [categoryName]);


    const renderProductList = (products) => {
        return (
          <ul>
            {products.map((product) => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ul>
        );
      };

  return (
   <div id="category-section" className="category-list">
          <div>
            <h3>{category.name}</h3>
            {renderProductList(category.products)}
          </div>
        </div>
  );
};

export default ProductList;
