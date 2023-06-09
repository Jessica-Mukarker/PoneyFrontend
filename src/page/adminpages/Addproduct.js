import React, { Component } from 'react';
import ProductService from './ProductService';

class ProductsOperations extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      brand: '',
      description: '',
      price: 0,
      productType: [],
      image: null,
    };
  }

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

  onChangeType = (e) => {
    const options = e.target.options;
    const selectedTypes = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedTypes.push(options[i].value);
      }
    }
    this.setState({ type: selectedTypes });
  };

  onChangeImage = (e) => {
    this.setState({ image: e.target.files[0] });
  };

  onSubmit = async (e) => {
    e.preventDefault();

    const { name, title, description, price, type, image } = this.state;

    const productData = {
      name,
      title,
      description,
      price,
      type,
      image,
    };

    try {
      await ProductService.createProduct(productData);
      // Perform any necessary actions after adding the product
      this.setState({
        name: '',
        title: '',
        description: '',
        price: 0,
        type: [],
        image: null,
      });
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h3>Add Product</h3>

          <div className="form-group">
            <label>Name</label>
            <input
              value={this.state.name}
              onChange={this.onChangeName}
              id="username"
              type="text"
              className="form-control"
              placeholder="Product name"
            />
          </div>

          <div className="form-group">
            <label>Brand:</label>
            <input
              value={this.state.brand}
              onChange={this.onChangeBrand}
              id="username"
              type="text"
              className="form-control"
              placeholder="Product title"
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <input
              value={this.state.description}
              onChange={this.onChangeDescription}
              id="email"
              type="text"
              className="form-control"
              placeholder="Product description"
            />
          </div>

          <div className="form-group">
            <label>Price</label>
            <input
              value={this.state.price}
              onChange={this.onChangePrice}
              id="email"
              type="number"
              className="form-control"
              placeholder="Product price"
            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleFormControlSelect2">Product Type</label>
            <select
              onChange={this.onChangeType}
              multiple
              className="form-control"
              id="type"
            >
              <option>smartphone</option>
              <option>laptop</option>
              <option>gaming</option>
              <option>pcpart</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="image">Image</label>
            <input
              id="image"
              type="file"
              className="form-control-file"
              onChange={this.onChangeImage}
            />
          </div>

          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Add Product
          </button>
        </form>
      </div>
    );
  }
}

export default ProductsOperations;
