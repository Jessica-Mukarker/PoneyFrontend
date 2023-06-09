import React, { Component } from 'react';
import ProductService from './ProductService';

class UpdateProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productId: '',
      name: '',
      brand: '',
      description: '',
      price: 0,
      productType: [],
      image: null,
    };
  }

  onChangeProductId = (e) => {
    this.setState({ productId: e.target.value });
  };

  onChangeName = (e) => {
    this.setState({ name: e.target.value });
  };

  onChangeBrand = (e) => {
    this.setState({ brand: e.target.value });
  };

  onChangeDescription = (e) => {
    this.setState({ description: e.target.value });
  };

  onChangePrice = (e) => {
    this.setState({ price: e.target.value });
  };

  onChangeProductType = (e) => {
    const options = e.target.options;
    const selectedProductType = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedProductType.push(options[i].value);
      }
    }
    this.setState({ productType: selectedProductType });
  };

  onChangeImage = (e) => {
    this.setState({ image: e.target.files[0] });
  };

  onSubmit = async (e) => {
    e.preventDefault();

    const { productId, name, title, description, price, productType, image } = this.state;

    const updatedProduct = {
      name,
      title,
      description,
      price,
      productType,
      image,
    };

    try {
      await ProductService.updateProduct(productId, updatedProduct);
      // Perform any necessary actions after updating the product
      console.log('Product updated successfully');
      // Reset the form fields
      this.setState({
        productId: '',
        name: '',
      brand: '',
      description: '',
      price: 0,
      productType: [],
      image: null,
      });
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  render() {
    const { productId, name, title, description, price, productType } = this.state;

    return (
      <div>
        <h3>Update Product</h3>

        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="productId">Product ID:</label>
            <input
              id="productId"
              type="text"
              className="form-control"
              placeholder="Enter product ID"
              value={productId}
              onChange={this.onChangeProductId}
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              className="form-control"
              placeholder="Enter product name"
              value={name}
              onChange={this.onChangeName}
            />
          </div>

          <div className="form-group">
            <label htmlFor="title">Brand:</label>
            <input
              id="title"
              type="text"
              className="form-control"
              placeholder="Enter product title"
              value={title}
              onChange={this.onChangeBrand}
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <input
              id="description"
              type="text"
              className="form-control"
              placeholder="Enter product description"
              value={description}
              onChange={this.onChangeDescription}
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input
              id="price"
              type="number"
              className="form-control"
              placeholder="Enter product price"
              value={price}
              onChange={this.onChangePrice}
            />
          </div>

          <div className="form-group">
            <label htmlFor="productType">Product Type:</label>
            <select
              id="productType"
              multiple
              className="form-control"
              value={productType}
              onChange={this.onChangeProductType}
            >
              <option value="smartphone">Smartphone</option>
              <option value="laptop">Laptop</option>
              <option value="gaming">Gaming</option>
              <option value="pcpart">PC Part</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="image">Image:</label>
            <input id="image" type="file" className="form-control-file" onChange={this.onChangeImage} />
          </div>

          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Update Product
          </button>
        </form>
      </div>
    );
  }
}

export default UpdateProduct;
