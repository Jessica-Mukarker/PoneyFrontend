import React, { Component } from 'react';
import CategoryService from './CategoryService';

class DeleteCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      selectedCategory: '',
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

  onChangeCategory = (e) => {
    this.setState({ selectedCategory: e.target.value });
  };

  onDelete = async () => {
    const { selectedCategory } = this.state;

    try {
      await CategoryService.deleteCategory(selectedCategory);
      // Perform any necessary actions after deleting the category
      this.fetchCategories();
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  render() {
    const { categories, selectedCategory } = this.state;

    return (
      <div>
        <h3>Delete Category</h3>

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

        <button
          type="button"
          className="btn btn-danger"
          onClick={this.onDelete}
          disabled={!selectedCategory}
        >
          Delete Category
        </button>
      </div>
    );
  }
}

export default DeleteCategory;
