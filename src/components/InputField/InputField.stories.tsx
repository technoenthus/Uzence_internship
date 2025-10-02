import type { Meta, StoryObj } from '@storybook/react';
import { InputField } from './InputField';

const meta: Meta<typeof InputField> = {
  title: 'Components/InputField',
  component: InputField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['filled', 'outlined', 'ghost'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'password'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    helperText: 'Must be at least 3 characters long',
  },
};

export const WithError: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    errorMessage: 'Password is required',
    invalid: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Field',
    placeholder: 'This field is disabled',
    disabled: true,
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <InputField label="Outlined (Default)" placeholder="Outlined variant" variant="outlined" />
      <InputField label="Filled" placeholder="Filled variant" variant="filled" />
      <InputField label="Ghost" placeholder="Ghost variant" variant="ghost" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <InputField label="Small" placeholder="Small size" size="sm" />
      <InputField label="Medium (Default)" placeholder="Medium size" size="md" />
      <InputField label="Large" placeholder="Large size" size="lg" />
    </div>
  ),
};

export const WithClearButton: Story = {
  args: {
    label: 'Search',
    placeholder: 'Type to search...',
    value: 'Sample text',
    showClearButton: true,
  },
};

export const PasswordField: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
    showPasswordToggle: true,
  },
};