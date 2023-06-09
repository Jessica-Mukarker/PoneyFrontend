import home from './image3.jpg';
import './AllProducts.css';
import Base64Image from '../Base64Image';
import { Link } from 'react-router-dom';
import authHeader from '../../services/auth-header';
import React, { useEffect, useState, useContext } from 'react';
import AuthContext from '../../components/context/Auth/AuthContex';

const ComponentPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedProductType, setSelectedProductType] = useState('');
  const { customer } = useContext(AuthContext);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:8080/products');
      const data = await response.json();
      const productList = data._embedded.productsList;
      setProducts(productList);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleProductTypeFilter = (productType) => {
    setSelectedProductType(productType);
  };

  const handleBrandFilter = (brand) => {
    setSelectedBrand(brand);
  };

  const addToCartHandler = async (productId) => {
    const cartItem = {
      productId: productId,
      quantity: 1,
      price: products.find((product) => product.Id === productId).price,
    };
  
    try {
      const response = await fetch(`http://localhost:8080/customers/${customer.id}/cart/cartitems`, {
        method: 'POST',
        headers: {
          ...authHeader(), // Include the authorization header
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cartItem),
      });
  
      if (response.ok) {
        // Cart item added successfully
        // Perform any necessary actions
      } else {
        console.error('Failed to add item to cart:', response.status);
      }
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };
  

  const filteredByBrand = selectedBrand
    ? selectedBrand === 'Unbranded'
      ? products.filter((product) => product.brand === selectedBrand || product.brand === 'null')
      : products.filter((product) => product.brand === selectedBrand)
    : products;

  const filteredByProductType = selectedProductType
    ? filteredByBrand.filter((product) => product.productType.includes(selectedProductType))
    : filteredByBrand;

  const filteredProducts = filteredByProductType;

  const uniqueBrands = [...new Set(products.map((product) => product.brand))];
  if (uniqueBrands.includes('null')) {
    const nullIndex = uniqueBrands.indexOf('null');
    uniqueBrands[nullIndex] = 'Unbranded';
  }

  const uniqueProductTypes = [...new Set(products.map((product) => product.productType))];

  return (
    <div>
      <div className="header-container">
        <div className="header-image" style={{ backgroundImage: `url(${home})` }}>
          <div className="header-content">
            <h1 className="header-title">SHOP PRODUCTS</h1>
          </div>
        </div>
      </div>

      <div className="filter-container">
        <div className="filter-row">
          <select value={selectedBrand} onChange={(e) => handleBrandFilter(e.target.value)}>
            <option value="">All Brands</option>
            {uniqueBrands.map((brand) => (
              <option value={brand} key={brand}>
                {brand === 'null' ? 'Unbranded' : brand}
              </option>
            ))}
          </select>

          <select value={selectedProductType} onChange={(e) => handleProductTypeFilter(e.target.value)}>
            <option value="">All Product Types</option>
            {uniqueProductTypes.map((productType) => (
              <option value={productType} key={productType}>
                {productType}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="products-container">
        {selectedProductType && <p>Selected Product Type: {selectedProductType}</p>}

        {filteredProducts.length === 0 ? (
          <p>No products found.</p>
        ) : (
          filteredProducts.map((product) => (
            <div className="product-card card" key={product.id}>
              <Base64Image base64Image={product.image} className="product-image image-container" />
              <div className="product-details container">
                <span className="text-gray-400 mr-3 uppercase text-xs" key={`${product.id}-brand`}>
                  {product.brand}
                </span>
                <p
                  className="text-lg font-bold text-black truncate block capitalize"
                  style={{ maxWidth: '400px' }}
                  key={`${product.id}-name`}
                >
                  {product.name}
                </p>
                <p className="product-type" key={`${product.id}-type`}>
                  {product.productType}
                </p>
                <div className="flex items-center flex items-center justify-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3 price" key={`${product.id}-price`}>
                    ${product.price}
                  </p>
                </div>
                <p>
                <Link to={`/products/${product.id}`}>View Product</Link>
                </p>
                <p>
                  <button onClick={() => addToCartHandler(product.id)}>Add to Cart</button>
                </p>
                <p>
                  <button>Add to OrderList</button>
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ComponentPage;
