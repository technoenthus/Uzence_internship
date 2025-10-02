import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { InputField } from './InputField';

describe('InputField', () => {
  it('renders with label and placeholder', () => {
    render(
      <InputField
        label="Test Label"
        placeholder="Test placeholder"
      />
    );
    
    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Test placeholder')).toBeInTheDocument();
  });

  it('handles value changes', () => {
    const handleChange = jest.fn();
    render(<InputField value="test" onChange={handleChange} />);
    
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'new value' } });
    
    expect(handleChange).toHaveBeenCalled();
  });

  it('shows error message when invalid', () => {
    render(<InputField errorMessage="This field is required" />);
    
    expect(screen.getByRole('alert')).toHaveTextContent('This field is required');
  });

  it('shows helper text when provided', () => {
    render(<InputField helperText="This is helper text" />);
    
    expect(screen.getByText('This is helper text')).toBeInTheDocument();
  });

  it('disables input when disabled prop is true', () => {
    render(<InputField disabled />);
    
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('shows clear button when showClearButton is true and has value', () => {
    const handleChange = jest.fn();
    render(
      <InputField
        value="test"
        onChange={handleChange}
        showClearButton
      />
    );
    
    const clearButton = screen.getByLabelText('Clear input');
    expect(clearButton).toBeInTheDocument();
    
    fireEvent.click(clearButton);
    expect(handleChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: '' })
      })
    );
  });
});