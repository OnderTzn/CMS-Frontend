import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiClient from '../../api/client';
import { Header } from '../../components';

const AddLicense = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    startTime: '',
    endTime: '',
    licenseCode: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.startTime || !formData.endTime || !formData.licenseCode) {
      setMessage('All fields are required.');
      return;
    }
    try {
      await apiClient.post('/licenses', formData);
      setMessage('License added successfully.');
      navigate('/Show%20licenses');
    } catch (err) {
      setMessage('Failed to add license.');
    }
  };

  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='License' title='Add license' />
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
          <label className='block mb-1'>Start Time</label>
          <input
            type='text'
            name='startTime'
            value={formData.startTime}
            onChange={handleChange}
            className='border p-2 rounded w-full'
          />
        </div>
        <div>
          <label className='block mb-1'>End Time</label>
          <input
            type='text'
            name='endTime'
            value={formData.endTime}
            onChange={handleChange}
            className='border p-2 rounded w-full'
          />
        </div>
        <div>
          <label className='block mb-1'>License Code</label>
          <input
            type='text'
            name='licenseCode'
            value={formData.licenseCode}
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

export default AddLicense;
