import React, { Component } from 'react';
import CategoryService from './CategoryService';

class UpdateCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      selectedCategory: '',
      name: '',
      description: '',
      image: null,
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories = async () => {
    try {
      const categories = await CategoryService.getCategories();
      this.setState({ categories });
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  onChangeCategory = async (e) => {
    const selectedCategoryId = e.target.value;
    if (selectedCategoryId) {
      try {
        const category = await CategoryService.getCategory(selectedCategoryId);
        this.setState({
          selectedCategory: selectedCategoryId,
          name: category.name,
          description: category.description,
          image: category.image,
        });
      } catch (error) {
        console.error('Error fetching category:', error);
      }
    } else {
      this.setState({
        selectedCategory: '',
        name: '',
        description: '',
        image: null,
      });
    }
  };

  onChangeName = (e) => {
    this.setState({ name: e.target.value });
  };

  onChangeDescription = (e) => {
    this.setState({ description: e.target.value });
  };

  onChangeImage = (e) => {
    this.setState({ image: e.target.files[0] });
  };

  onUpdate = async () => {
    const { selectedCategory, name, description, image } = this.state;

    const categoryData = {
      name,
      description,
      image,
    };

    try {
      await CategoryService.updateCategory(selectedCategory, categoryData);
      // Perform any necessary actions after updating the category
      this.fetchCategories();
    } catch (error) {
      console.error('Error updating category:', error);
    }
  };

  render() {
    const { categories, selectedCategory, name, description } = this.state;

    return (
      <div>
        <h3>Update Category</h3>

        <div className="form-group">
          <label>Select Category</label>
          <select
            value={selectedCategory}
            onChange={this.onChangeCategory}
            className="form-control"
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {selectedCategory && (
          <form onSubmit={this.onUpdate}>
            <div className="form-group">
              <label>Name</label>
              <input
                value={name}
                onChange={this.onChangeName}
                type="text"
                className="form-control"
                placeholder="Category name"
              />
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                value={description}
                onChange={this.onChangeDescription}
                className="form-control"
                placeholder="Category description"
              ></textarea>
            </div>

            <div className="form-group">
              <label>Image</label>
              <input
                type="file"
                onChange={this.onChangeImage}
                accept="image/*"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Update Category
            </button>
          </form>
        )}
      </div>
    );
  }
}

export default UpdateCategory;
