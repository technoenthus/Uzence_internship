import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { DataTable } from './DataTable';

interface TestData {
  id: number;
  name: string;
  email: string;
}

const mockData: TestData[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
];

const mockColumns = [
  { key: 'id', title: 'ID', dataIndex: 'id' as keyof TestData, sortable: true },
  { key: 'name', title: 'Name', dataIndex: 'name' as keyof TestData, sortable: true },
  { key: 'email', title: 'Email', dataIndex: 'email' as keyof TestData },
];

describe('DataTable', () => {
  it('renders table with data', () => {
    render(<DataTable data={mockData} columns={mockColumns} />);
    
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('jane@example.com')).toBeInTheDocument();
  });

  it('shows loading state', () => {
    render(<DataTable data={[]} columns={mockColumns} loading />);
    
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('shows empty state when no data', () => {
    render(<DataTable data={[]} columns={mockColumns} />);
    
    expect(screen.getByText('No data available')).toBeInTheDocument();
  });

  it('handles row selection', () => {
    const onRowSelect = jest.fn();
    render(
      <DataTable
        data={mockData}
        columns={mockColumns}
        selectable
        onRowSelect={onRowSelect}
      />
    );
    
    const checkbox = screen.getAllByRole('checkbox')[1]; // First row checkbox
    fireEvent.click(checkbox);
    
    expect(onRowSelect).toHaveBeenCalledWith([mockData[0]]);
  });

  it('handles select all', () => {
    const onRowSelect = jest.fn();
    render(
      <DataTable
        data={mockData}
        columns={mockColumns}
        selectable
        onRowSelect={onRowSelect}
      />
    );
    
    const selectAllCheckbox = screen.getByLabelText('Select all rows');
    fireEvent.click(selectAllCheckbox);
    
    expect(onRowSelect).toHaveBeenCalledWith(mockData);
  });

  it('handles column sorting', () => {
    render(<DataTable data={mockData} columns={mockColumns} />);
    
    const nameHeader = screen.getByText('Name');
    fireEvent.click(nameHeader);
    
    // Check if sort indicator is present
    expect(nameHeader.parentElement).toHaveTextContent('↑');
  });
});