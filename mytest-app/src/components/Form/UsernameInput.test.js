import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import UsernameInput from './UsernameInput';

// Mock the debounce timer using Jest's fake timers
jest.useFakeTimers();

describe('UsernameInput component with async validation', () => {
  const mockOnUsernameValid = jest.fn();

  beforeEach(() => {
    mockOnUsernameValid.mockClear();
    jest.clearAllTimers(); // Clear any timers from previous tests
  });

  test('shows "Checking availability..." while typing', async () => {
    render(<UsernameInput onUsernameValid={mockOnUsernameValid} />);
    const usernameInput = screen.getByLabelText(/username/i);

    fireEvent.change(usernameInput, { target: { value: 'newuser' } });
    expect(screen.getByText('Checking availability...')).toBeInTheDocument();

    jest.advanceTimersByTime(200); // Advance timer partially
    expect(screen.getByText('Checking availability...')).toBeInTheDocument();
  });

  test('shows "Username available!" for a unique username after debounce', async () => {
    render(<UsernameInput onUsernameValid={mockOnUsernameValid} />);
    const usernameInput = screen.getByLabelText(/username/i);

    fireEvent.change(usernameInput, { target: { value: 'uniqueusername' } });
    
    // Advance timers past debounce and simulated API call
    jest.advanceTimersByTime(1000); // 500ms debounce + 500ms API mock

    await waitFor(() => {
      expect(screen.getByText('Username available!')).toBeInTheDocument();
    });
    expect(screen.queryByText('Checking availability...')).not.toBeInTheDocument();
    expect(mockOnUsernameValid).toHaveBeenCalledWith('uniqueusername');
  });

  test('shows "Username is already taken" for a taken username after debounce', async () => {
    render(<UsernameInput onUsernameValid={mockOnUsernameValid} />);
    const usernameInput = screen.getByLabelText(/username/i);

    fireEvent.change(usernameInput, { target: { value: 'admin' } }); // A taken username
    
    jest.advanceTimersByTime(1000); // 500ms debounce + 500ms API mock

    await waitFor(() => {
      expect(screen.getByText('Username is already taken')).toBeInTheDocument();
    });
    expect(screen.queryByText('Checking availability...')).not.toBeInTheDocument();
    expect(mockOnUsernameValid).not.toHaveBeenCalled();
  });

  test('shows error for short username immediately', () => {
    render(<UsernameInput onUsernameValid={mockOnUsernameValid} />);
    const usernameInput = screen.getByLabelText(/username/i);

    fireEvent.change(usernameInput, { target: { value: 'ab' } }); // < 3 chars
    expect(screen.getByText('Username must be at least 3 characters')).toBeInTheDocument();
    expect(mockOnUsernameValid).not.toHaveBeenCalled();
  });
});