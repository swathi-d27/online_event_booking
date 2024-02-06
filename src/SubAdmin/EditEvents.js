import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Edit() {
  let navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({
    event: '',
    date: '',
    college: '',
    tickets: ''
  });

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const result = await axios.get(`http://localhost:8080/product/${id}`);
        setUser(result.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, [id]);

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/product/update/${id}`, user);
      alert("DETAILS UPDATED");
      navigate("/");
    } catch (error) {
      console.error('Error updating user details:', error);
    }
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>EDIT EVENT</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className='mb-3'>
              <label htmlFor='EVENT' className='form-label'>
                EVENT
              </label>
              <input
                type="text"
                className='form-control'
                name='event'
                value={user.event}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='DATE' className='form-label'>
                DATE
              </label>
              <input
                type="date"
                className='form-control'
                name='date'
                value={user.date}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='COLLEGE' className='form-label'>
                COLLEGE
              </label>
              <input
                type="text"
                className='form-control'
                name='college'
                value={user.college}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='TICKETS' className='form-label'>
                TICKETS
              </label>
              <input
                type="number"
                className='form-control'
                name='tickets'
                value={user.tickets}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type='submit' className='btn btn-outline-primary'>
              UPDATE
            </button>
            <Link className='btn btn-outline-danger mx-2' to="/">
              CANCEL
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
