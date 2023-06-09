import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Base64Image from '../../page/Base64Image';
const ProductDetailsPage = () => {
  const params = useParams();
  const { id } = params;

  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8080/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);

  console.log('params', params);
  return (
    <div>
      <h1>Product Details</h1>
      <div className="product-image">
      <Base64Image base64Image={product.image} className="product-image image-container" />
      </div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetailsPage;
