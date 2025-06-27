import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SubscriptionForm from './SubscriptionForm';

describe('SubscriptionForm component', () => {
  const mockOnSubmit = jest.fn();

  beforeEach(() => {
    mockOnSubmit.mockClear();
  });

  test('renders email input, checkbox, and subscribe button', () => {
    render(<SubscriptionForm onSubmit={mockOnSubmit} />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/i agree to the terms and conditions/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument();
  });

  test('shows validation error if terms are not agreed on submit', async () => {
    render(<SubscriptionForm onSubmit={mockOnSubmit} />);
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'test@example.com' } });
    fireEvent.click(screen.getByRole('button', { name: /subscribe/i }));

    await waitFor(() => {
      expect(screen.getByText('You must agree to the terms and conditions')).toBeInTheDocument();
    });
    expect(mockOnSubmit).not.toHaveBeenCalled();
  });

  test('submits successfully when email is valid and terms are agreed', async () => {
    render(<SubscriptionForm onSubmit={mockOnSubmit} />);
    const emailInput = screen.getByLabelText(/email/i);
    const termsCheckbox = screen.getByLabelText(/i agree to the terms and conditions/i);
    const subscribeButton = screen.getByRole('button', { name: /subscribe/i });

    fireEvent.change(emailInput, { target: { value: 'valid@example.com' } });
    fireEvent.click(termsCheckbox); // Click to check the checkbox
    fireEvent.click(subscribeButton);

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledTimes(1);
      expect(mockOnSubmit).toHaveBeenCalledWith({
        email: 'valid@example.com',
        agreeTerms: true,
      });
    });

    // Verify form fields are reset
    expect(emailInput).toHaveValue('');
    expect(termsCheckbox).not.toBeChecked();
  });
});