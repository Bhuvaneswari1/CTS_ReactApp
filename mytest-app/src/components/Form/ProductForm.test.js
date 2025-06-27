import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ProductForm from './ProductForm';

describe('ProductForm component', () => {
  const mockOnSubmit = jest.fn();

  beforeEach(() => {
    mockOnSubmit.mockClear();
  });

  test('renders form fields and submit button', () => {
    render(<ProductForm onSubmit={mockOnSubmit} />);
    expect(screen.getByLabelText(/product name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/category/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /add product/i })).toBeInTheDocument();
  });

  test('shows validation errors for empty product name and unselected category on submit', async () => {
    render(<ProductForm onSubmit={mockOnSubmit} />);
    fireEvent.click(screen.getByRole('button', { name: /add product/i }));

    await waitFor(() => {
      expect(screen.getByText('Product name is required')).toBeInTheDocument();
      expect(screen.getByText('Please select a category')).toBeInTheDocument();
    });
    expect(mockOnSubmit).not.toHaveBeenCalled();
  });

  test('allows selecting a category and submitting valid data', async () => {
    render(<ProductForm onSubmit={mockOnSubmit} />);
    const productNameInput = screen.getByLabelText(/product name/i);
    const categorySelect = screen.getByLabelText(/category/i);
    const submitButton = screen.getByRole('button', { name: /add product/i });

    fireEvent.change(productNameInput, { target: { value: 'New Laptop' } });
    fireEvent.change(categorySelect, { target: { value: 'Electronics' } }); // Select 'Electronics' option
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledTimes(1);
      expect(mockOnSubmit).toHaveBeenCalledWith({
        productName: 'New Laptop',
        category: 'Electronics',
      });
    });

    // Verify form fields are reset
    expect(productNameInput).toHaveValue('');
    expect(categorySelect).toHaveValue('');
  });
});