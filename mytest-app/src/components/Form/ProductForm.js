import React, { useState } from 'react';

function ProductForm({ onSubmit }) {
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [nameError, setNameError] = useState('');
  const [categoryError, setCategoryError] = useState('');

  const categories = ['Electronics', 'Books', 'Clothing'];

  const validate = () => {
    let isValid = true;
    setNameError('');
    setCategoryError('');

    if (!productName.trim()) {
      setNameError('Product name is required');
      isValid = false;
    }
    if (!category) {
      setCategoryError('Please select a category');
      isValid = false;
    }
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit({ productName, category });
      setProductName('');
      setCategory('');
    }
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Product Submission Form">
      <div>
        <label htmlFor="productName">Product Name:</label>
        <input
          id="productName"
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          aria-invalid={!!nameError}
          aria-describedby={nameError ? 'productName-error' : undefined}
        />
        {nameError && <p id="productName-error" className="error-message">{nameError}</p>}
      </div>
      <div>
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          aria-invalid={!!categoryError}
          aria-describedby={categoryError ? 'category-error' : undefined}
        >
          <option value="">--Select--</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        {categoryError && <p id="category-error" className="error-message">{categoryError}</p>}
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
}

export default ProductForm;