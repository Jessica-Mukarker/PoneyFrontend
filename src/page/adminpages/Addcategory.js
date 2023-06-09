import React, { Component } from 'react';
import CategoryService from './CategoryService';

class AddCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      image: null,
    };
  }

  onChangeName = (e) => {
    this.setState({ name: e.target.value });
  };

  onChangeDescription = (e) => {
    this.setState({ description: e.target.value });
  };

  onChangeImage = (e) => {
    this.setState({ image: e.target.files[0] });
  };

  onSubmit = async (e) => {
    e.preventDefault();

    const { name, description, image } = this.state;

    const categoryData = new FormData();
    categoryData.append('name', name);
    categoryData.append('description', description);
    categoryData.append('image', image);

    try {
      await CategoryService.createCategory(categoryData);
      // Perform any necessary actions after adding the category
      this.setState({
        name: '',
        description: '',
        image: null,
      });
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h3>Add Category</h3>

          <div className="form-group">
            <label>Name</label>
            <input
              value={this.state.name}
              onChange={this.onChangeName}
              type="text"
              className="form-control"
              placeholder="Category name"
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <input
              value={this.state.description}
              onChange={this.onChangeDescription}
              type="text"
              className="form-control"
              placeholder="Category description"
            />
          </div>

          <div className="form-group">
            <label>Image</label>
            <input
              type="file"
              onChange={this.onChangeImage}
              className="form-control-file"
            />
          </div>

          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Add Category
          </button>
        </form>
      </div>
    );
  }
}

export default AddCategory;
