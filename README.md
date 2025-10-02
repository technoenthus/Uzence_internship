# React Components Assignment

This project contains two custom React components built with TypeScript, Tailwind CSS, and documented with Storybook.

## Components

### 1. InputField
A flexible input component with validation states and multiple variants.

**Features:**
- Text input with label, placeholder, helper text, error message
- States: disabled, invalid, loading
- Variants: filled, outlined, ghost
- Sizes: small, medium, large
- Optional: clear button, password toggle
- Full accessibility support

### 2. DataTable
A data table component with sorting and selection functionality.

**Features:**
- Display tabular data
- Column sorting
- Row selection (single/multiple)
- Loading state
- Empty state
- Responsive design
- Full accessibility support

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run Storybook
npm run storybook

# Run tests
npm test

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── InputField/
│   │   ├── InputField.tsx
│   │   ├── InputField.test.tsx
│   │   ├── InputField.stories.tsx
│   │   └── index.ts
│   └── DataTable/
│       ├── DataTable.tsx
│       ├── DataTable.test.tsx
│       ├── DataTable.stories.tsx
│       └── index.ts
├── App.tsx
├── main.tsx
└── index.css
```

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Storybook** - Component documentation
- **Vite** - Build tool
- **Jest & Testing Library** - Testing

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run storybook` - Start Storybook
- `npm run build-storybook` - Build Storybook
- `npm test` - Run tests

## Features Implemented

### InputField Component
✅ Text input with label, placeholder, helper text, error message  
✅ States: disabled, invalid, loading  
✅ Variants: filled, outlined, ghost  
✅ Sizes: small, medium, large  
✅ Optional: clear button, password toggle  
✅ TypeScript with proper typing  
✅ Responsive design  
✅ Basic accessibility (ARIA labels)  
✅ Clean, modern styling  
✅ Basic tests  

### DataTable Component
✅ Display tabular data  
✅ Column sorting  
✅ Row selection (single/multiple)  
✅ Loading state  
✅ Empty state  
✅ TypeScript with proper typing  
✅ Responsive design  
✅ Basic accessibility (ARIA labels)  
✅ Clean, modern styling  
✅ Basic tests  

## Accessibility Features

Both components include:
- Proper ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Focus management
- Semantic HTML structure

## Testing

Components include comprehensive test suites covering:
- Rendering with different props
- User interactions
- State changes
- Accessibility features
- Edge cases