import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiClient from '../../api/client';
import { Header } from '../../components';

const DeleteContent = () => {
  const [contentId, setContentId] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!contentId) {
      setMessage('Content ID is required.');
      return;
    }
    try {
      await apiClient.delete(`/contents/${contentId}`);
      setMessage('Content deleted successfully.');
      navigate('/All%20contents');
    } catch (err) {
      setMessage('Failed to delete content.');
    }
  };

  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='Contents' title='Delete content' />
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label className='block mb-1'>Content ID</label>
          <input
            type='text'
            value={contentId}
            onChange={(e) => setContentId(e.target.value)}
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

export default DeleteContent;
