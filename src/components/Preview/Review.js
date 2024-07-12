import React, { useState } from 'react';
import './Review.css';
import Modal from '../UI/Modal';
import { useNavigate } from 'react-router-dom';
import AppContext from '../../store/use-context';
import { useContext } from 'react';


const Review = () => {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    title: '',
    description: ''
  });
  const ctx = useContext(AppContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    ctx.setReviews(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
    ctx.setReviews(formData);
    navigate('/list-your-property/previewpage');
  };

  return (
    <Modal>
      <h2>Write a Review</h2>
      <form className='review-form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Name:</label>
          <input 
            type='text' 
            id='name' 
            name='name' 
            value={formData.name} 
            onChange={handleChange} 
          />
        </div>
        <div className='form-group'>
          <label htmlFor='type'>Type:</label>
          <input 
            type='text' 
            id='type' 
            name='type' 
            value={formData.type} 
            onChange={handleChange} 
          />
        </div>
        <div className='form-group'>
          <label htmlFor='title'>Title:</label>
          <input 
            type='text' 
            id='title' 
            name='title' 
            value={formData.title} 
            onChange={handleChange} 
          />
        </div>
        <div className='form-group'>
          <label htmlFor='description'>Description:</label>
          <textarea 
            id='description' 
            name='description' 
            value={formData.description} 
            onChange={handleChange} 
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </Modal>
  );
};

export default Review;
