import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiClient from '../../api/client';
import { Header } from '../../components';

const AddContent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    status: '',
    posterUrl: '',
    videoUrl: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.status || !formData.posterUrl || !formData.videoUrl) {
      setMessage('All fields are required.');
      return;
    }
    try {
      await apiClient.post('/contents', formData);
      setMessage('Content added successfully.');
      navigate('/All%20contents');
    } catch (err) {
      setMessage('Failed to add content.');
    }
  };

  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='Contents' title='Add content' />
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label className='block mb-1'>Name</label>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            className='border p-2 rounded w-full'
          />
        </div>
        <div>
          <label className='block mb-1'>Status</label>
          <input
            type='text'
            name='status'
            value={formData.status}
            onChange={handleChange}
            className='border p-2 rounded w-full'
          />
        </div>
        <div>
          <label className='block mb-1'>Poster URL</label>
          <input
            type='text'
            name='posterUrl'
            value={formData.posterUrl}
            onChange={handleChange}
            className='border p-2 rounded w-full'
          />
        </div>
        <div>
          <label className='block mb-1'>Video URL</label>
          <input
            type='text'
            name='videoUrl'
            value={formData.videoUrl}
            onChange={handleChange}
            className='border p-2 rounded w-full'
          />
        </div>
        <button type='submit' className='px-4 py-2 bg-blue-600 text-white rounded'>
          Submit
        </button>
      </form>
      {message && <p className='mt-4'>{message}</p>}
    </div>
  );
};

export default AddContent;
