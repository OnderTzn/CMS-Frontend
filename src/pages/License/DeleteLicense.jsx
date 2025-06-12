import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiClient from '../../api/client';
import { Header } from '../../components';

const DeleteLicense = () => {
  const [licenseId, setLicenseId] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!licenseId) {
      setMessage('License ID is required.');
      return;
    }
    try {
      await apiClient.delete(`/licenses/${licenseId}`);
      setMessage('License deleted successfully.');
      navigate('/Show%20licenses');
    } catch (err) {
      setMessage('Failed to delete license.');
    }
  };

  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='License' title='Delete license' />
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label className='block mb-1'>License ID</label>
          <input
            type='text'
            value={licenseId}
            onChange={(e) => setLicenseId(e.target.value)}
            className='border p-2 rounded w-full'
          />
        </div>
        <button type='submit' className='px-4 py-2 bg-red-600 text-white rounded'>
          Delete
        </button>
      </form>
      {message && <p className='mt-4'>{message}</p>}
    </div>
  );
};

export default DeleteLicense;
