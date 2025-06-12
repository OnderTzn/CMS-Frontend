import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiClient from '../api/client';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await apiClient.post('/login', credentials);
      if (data && data.token) {
        login(data.token);
        navigate('/');
      } else {
        setMessage('Invalid response from server.');
      }
    } catch (err) {
      setMessage('Login failed.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-main-bg">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md space-y-4">
        <div>
          <label className="block mb-1">Username</label>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </div>
        <div>
          <label className="block mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded w-full">
          Login
        </button>
        {message && <p className="text-center text-red-500">{message}</p>}
      </form>
    </div>
  );
};

export default Login;
