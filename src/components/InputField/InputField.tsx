import React, { useState } from 'react';

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  variant?: 'filled' | 'outlined' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  type?: 'text' | 'password';
  showClearButton?: boolean;
  showPasswordToggle?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({
  value = '',
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled = false,
  invalid = false,
  variant = 'outlined',
  size = 'md',
  type = 'text',
  showClearButton = false,
  showPasswordToggle = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputType, setInputType] = useState(type);

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-3 py-2 text-base',
    lg: 'px-4 py-3 text-lg',
  };

  const variantClasses = {
    filled: 'bg-gray-100 border-0 focus:bg-white focus:ring-2 focus:ring-blue-500',
    outlined: 'bg-white border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
    ghost: 'bg-transparent border-0 border-b-2 border-gray-300 rounded-none focus:border-blue-500 focus:ring-0',
  };

  const baseClasses = `
    w-full rounded-md transition-all duration-200 outline-none
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    ${invalid || errorMessage ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}
  `.trim().replace(/\s+/g, ' ');

  const handleClear = () => {
    if (onChange) {
      onChange({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    setInputType(showPassword ? 'password' : 'text');
  };

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      
      <div className="relative">
        <input
          type={showPasswordToggle ? inputType : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={baseClasses}
          aria-invalid={invalid || !!errorMessage}
          aria-describedby={
            errorMessage ? 'error-message' : helperText ? 'helper-text' : undefined
          }
        />
        
        {(showClearButton && value) && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            aria-label="Clear input"
          >
            ✕
          </button>
        )}
        
        {showPasswordToggle && type === 'password' && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? '👁️' : '👁️‍🗨️'}
          </button>
        )}
      </div>
      
      {errorMessage && (
        <p id="error-message" className="mt-1 text-sm text-red-600" role="alert">
          {errorMessage}
        </p>
      )}
      
      {helperText && !errorMessage && (
        <p id="helper-text" className="mt-1 text-sm text-gray-500">
          {helperText}
        </p>
      )}
    </div>
  );
};