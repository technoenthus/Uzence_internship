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
### Screenshots
<img width="1873" height="876" alt="image" src="https://github.com/user-attachments/assets/dca4b971-6ff0-43ea-8a29-04e518b57f83" />
<img width="1876" height="841" alt="image" src="https://github.com/user-attachments/assets/c95e34b8-2057-4e32-8798-8d8876fa38a1" />
<img width="1861" height="838" alt="image" src="https://github.com/user-attachments/assets/2a1cb0a8-f9b7-40c2-9544-8c407a8b70d0" />
<img width="1885" height="846" alt="image" src="https://github.com/user-attachments/assets/3580d330-9d08-4e81-b014-c8c212462655" />


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
 Text input with label, placeholder, helper text, error message  
 States: disabled, invalid, loading  
 Variants: filled, outlined, ghost  
 Sizes: small, medium, large  
 Optional: clear button, password toggle  
 TypeScript with proper typing  
 Responsive design  
 Basic accessibility (ARIA labels)  
 Clean, modern styling  
 Basic tests  

### DataTable Component
 Display tabular data  
 Column sorting  
 Row selection (single/multiple)  
 Loading state  
 Empty state  
 TypeScript with proper typing  
 Responsive design  
 Basic accessibility (ARIA labels)  
 Clean, modern styling  
 Basic tests  

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
