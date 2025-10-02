import React, { useState, useMemo } from 'react';

export interface Column<T> {
  key: string;
  title: string;
  dataIndex: keyof T;
  sortable?: boolean;
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
}

type SortOrder = 'asc' | 'desc' | null;

export function DataTable<T extends Record<string, any>>({
  data,
  columns,
  loading = false,
  selectable = false,
  onRowSelect,
}: DataTableProps<T>) {
  const [selectedRows, setSelectedRows] = useState<T[]>([]);
  const [sortColumn, setSortColumn] = useState<keyof T | null>(null);
  const [sortOrder, setSortOrder] = useState<SortOrder>(null);

  const sortedData = useMemo(() => {
    if (!sortColumn || !sortOrder) return data;

    return [...data].sort((a, b) => {
      const aVal = a[sortColumn];
      const bVal = b[sortColumn];

      if (aVal < bVal) return sortOrder === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  }, [data, sortColumn, sortOrder]);

  const handleSort = (column: Column<T>) => {
    if (!column.sortable) return;

    if (sortColumn === column.dataIndex) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : sortOrder === 'desc' ? null : 'asc');
      if (sortOrder === 'desc') setSortColumn(null);
    } else {
      setSortColumn(column.dataIndex);
      setSortOrder('asc');
    }
  };

  const handleRowSelect = (row: T, checked: boolean) => {
    const newSelectedRows = checked
      ? [...selectedRows, row]
      : selectedRows.filter(r => r !== row);
    
    setSelectedRows(newSelectedRows);
    onRowSelect?.(newSelectedRows);
  };

  const handleSelectAll = (checked: boolean) => {
    const newSelectedRows = checked ? [...data] : [];
    setSelectedRows(newSelectedRows);
    onRowSelect?.(newSelectedRows);
  };

  const isRowSelected = (row: T) => selectedRows.includes(row);
  const isAllSelected = data.length > 0 && selectedRows.length === data.length;
  const isIndeterminate = selectedRows.length > 0 && selectedRows.length < data.length;

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        <span className="ml-2 text-gray-600">Loading...</span>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="text-center p-8 text-gray-500">
        <div className="text-4xl mb-2">📄</div>
        <p>No data available</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {selectable && (
              <th className="px-4 py-3 text-left">
                <input
                  type="checkbox"
                  checked={isAllSelected}
                  ref={input => {
                    if (input) input.indeterminate = isIndeterminate;
                  }}
                  onChange={(e) => handleSelectAll(e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  aria-label="Select all rows"
                />
              </th>
            )}
            {columns.map((column) => (
              <th
                key={column.key}
                className={`px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${
                  column.sortable ? 'cursor-pointer hover:bg-gray-100' : ''
                }`}
                onClick={() => handleSort(column)}
                aria-sort={
                  sortColumn === column.dataIndex
                    ? sortOrder === 'asc' ? 'ascending' : 'descending'
                    : 'none'
                }
              >
                <div className="flex items-center">
                  {column.title}
                  {column.sortable && (
                    <span className="ml-1">
                      {sortColumn === column.dataIndex ? (
                        sortOrder === 'asc' ? '↑' : '↓'
                      ) : (
                        '↕'
                      )}
                    </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {sortedData.map((row, index) => (
            <tr
              key={index}
              className={`hover:bg-gray-50 ${
                isRowSelected(row) ? 'bg-blue-50' : ''
              }`}
            >
              {selectable && (
                <td className="px-4 py-4">
                  <input
                    type="checkbox"
                    checked={isRowSelected(row)}
                    onChange={(e) => handleRowSelect(row, e.target.checked)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    aria-label={`Select row ${index + 1}`}
                  />
                </td>
              )}
              {columns.map((column) => (
                <td key={column.key} className="px-4 py-4 text-sm text-gray-900">
                  {String(row[column.dataIndex] ?? '')}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}