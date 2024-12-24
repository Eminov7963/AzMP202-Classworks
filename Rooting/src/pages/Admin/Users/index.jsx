import React, { useState } from 'react';
import './users.scss';

const Users = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'johndoe@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'janesmith@example.com', role: 'Editor' },
    { id: 3, name: 'Bob Johnson', email: 'bobjohnson@example.com', role: 'Viewer' },
  ]);

  const handleAddUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="users-container">
      <main className="users-main">
        <section className="users-list">
          <h2>Users List</h2>
          <table className="users-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <button>Edit</button>
                    <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="add-user">
          <h2>Add New User</h2>
          <AddUserForm onAddUser={handleAddUser} />
        </section>
      </main>

      <footer className="users-footer">
        <p>&copy; 2024 User Management</p>
      </footer>
    </div>
  );
};

// Yeni kullanıcı eklemek için form bileşeni
const AddUserForm = ({ onAddUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Viewer');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Yeni kullanıcı oluşturuluyor
    const newUser = {
      id: Date.now(), // Benzersiz bir id oluşturmak için timestamp kullanıyoruz
      name,
      email,
      role,
    };

    onAddUser(newUser);
    setName('');
    setEmail('');
    setRole('Viewer'); // Varsayılan role
  };

  return (
    <form className="add-user-form" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          placeholder="Enter user name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          placeholder="Enter user email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Role:
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="Admin">Admin</option>
          <option value="Editor">Editor</option>
          <option value="Viewer">Viewer</option>
        </select>
      </label>
      <button type="submit">Add User</button>
    </form>
  );
};

export default Users;
