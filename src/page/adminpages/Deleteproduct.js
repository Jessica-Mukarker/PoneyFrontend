import React, { Component } from 'react';
import ProductService from './ProductService';

class DeleteProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      selectedProductId: '',
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = async () => {
    try {
      const response = await ProductService.getProducts();
      const products = response.data;
      this.setState({ products });
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  onChangeSelectedProduct = (e) => {
    this.setState({ selectedProductId: e.target.value });
  };

  onDeleteProduct = async () => {
    const { selectedProductId } = this.state;

    try {
      await ProductService.deleteProduct(selectedProductId);
      // Perform any necessary actions after deleting the product
      this.setState({ selectedProductId: '' });
      this.fetchProducts(); // Refresh the product list after deletion
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  render() {
    const { products, selectedProductId } = this.state;

    return (
      <div>
        <h3>Delete Product</h3>

        {products.length === 0 ? (
          <p>No products found.</p>
        ) : (
          <div>
            <label htmlFor="productSelect">Select a product to delete:</label>
            <select
              id="productSelect"
              value={selectedProductId}
              onChange={this.onChangeSelectedProduct}
            >
              <option value="">-- Select a product --</option>
              {products.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.name}
                </option>
              ))}
            </select>

            {selectedProductId && (
              <button onClick={this.onDeleteProduct}>Delete Product</button>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default DeleteProduct;
