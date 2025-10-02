import React, { useState } from 'react';
import { InputField } from './components/InputField';
import { DataTable } from './components/DataTable';
import './index.css';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const sampleUsers: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Manager' },
];

const columns = [
  { key: 'id', title: 'ID', dataIndex: 'id' as keyof User, sortable: true },
  { key: 'name', title: 'Name', dataIndex: 'name' as keyof User, sortable: true },
  { key: 'email', title: 'Email', dataIndex: 'email' as keyof User, sortable: true },
  { key: 'role', title: 'Role', dataIndex: 'role' as keyof User },
];

function App() {
  const [inputValue, setInputValue] = useState('');
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-gray-900">React Components Demo</h1>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">InputField Component</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="Search"
              placeholder="Type to search..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              showClearButton
              helperText="Enter keywords to search"
            />
            <InputField
              label="Password"
              type="password"
              placeholder="Enter password"
              showPasswordToggle
            />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">DataTable Component</h2>
          <DataTable
            data={sampleUsers}
            columns={columns}
            selectable
            onRowSelect={setSelectedUsers}
          />
          {selectedUsers.length > 0 && (
            <p className="mt-4 text-sm text-gray-600">
              Selected {selectedUsers.length} user(s)
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;