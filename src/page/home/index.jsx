import React, { useEffect, useState } from 'react';
import peonyImage from './home.jpg';
import peonyImage2 from './poeny2.png';
import CategoryCard from "../CategoryCard";

import './home.css';

const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/categories')
      .then((res) => res.json())
      .then((data) => {
        const categorieslist = data._embedded.categoryList;
        console.log(data);
        setCategories(categorieslist);
      })
      .catch((err) => console.log('err', err));
  }, []);

  const handleScrollToCategories = () => {
    const categorySection = document.getElementById('category-section');
    if (categorySection) {
      window.scrollTo({
        top: categorySection.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="main">
      <div className="image-container">
        <img src={peonyImage} alt="Peony" />
        <div className="overlay">
          <h1 className="selector">WELCOME TO</h1>
          <img src={peonyImage2} alt="Peony" />
          <p className="selector2">Unleash Your Petals of Beauty with Peony Makeup</p>
          <button className="scroll-button" onClick={handleScrollToCategories}>
            Scroll to Categories
          </button>
        </div>
      </div>
      <div className="scroll">
        <span>SHOP NOW • SHOP NOW • SHOP NOW • SHOP NOW • SHOP NOW • SHOP NOW • SHOP NOW • SHOP NOW • SHOP NOW • SHOP NOW • SHOP NOW • SHOP NOW • &nbsp;</span>
      </div>
      <div className="scroll scroll2">
        <span>SHOP NOW • SHOP NOW • SHOP NOW • SHOP NOW • SHOP NOW • SHOP NOW • SHOP NOW • SHOP NOW • SHOP NOW • SHOP NOW • SHOP NOW • SHOP NOW •&nbsp;</span>
      </div>
      <div>
        <div></div>
        <h2>Shop categories</h2>
        <div id="category-section" className="category-list">
          {categories.map((category) => {
            return <CategoryCard key={category.name} category={category} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
