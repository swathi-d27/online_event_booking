import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Add() {
  const navigate = useNavigate();

  const [events, setEvents] = useState({
    events: '',
    date: '',
    college: '',
    tickets: ''
  });

  const { event, date, college, tickets } = user;

  const handleInputChange = (e) => {
    setEvents({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // Form validation
    if (!event || !date || !college || !tickets) {
      alert("Please fill in all fields");
      return;
    }

    try {
      // Use a more descriptive endpoint URL
      await axios.post("http://localhost:8080/product/add", user);
      alert("Event registered successfully");
      navigate("/");
    } catch (error) {
      console.error("Error submitting form:", error.message);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>REGISTER EVENT</h2>
          <form onSubmit={onSubmit}>
            <div className='mb-3'>
              <label htmlFor='event' className='form-label'>
                EVENT
              </label>
              <input
                type="text"
                className='form-control'
                name='event'
                value={events}
                onChange={handleInputChange}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor='date' className='form-label'>
                DATE
              </label>
              <input
                type="date"
                className='form-control'
                name='date'
                value={date}
                onChange={handleInputChange}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor='college' className='form-label'>
                COLLEGE
              </label>
              <input
                type="text"
                className='form-control'
                name='college'
                value={college}
                onChange={handleInputChange}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor='tickets' className='form-label'>
                TICKETS
              </label>
              <input
                type="number"
                className='form-control'
                name='tickets'
                value={tickets}
                onChange={handleInputChange}
              />
            </div>

            <button type='submit' className='btn btn-outline-primary'>

              SUBMIT
            </button>
            <button type='button' className='btn btn-outline-danger mx-2' onClick={() => navigate("/")}>
              CANCEL
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
