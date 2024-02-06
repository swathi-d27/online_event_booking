import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Modal from 'react-modal';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import Sidebar from './Sidebar';

Modal.setAppElement('#root');

const Navbar = () => {
  
  const [sidebar, setSidebar] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [registerError, setRegisterError] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [college, setCollege] = useState('');
  
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const showSidebar = () => setSidebar(!sidebar);

  const openLoginModal = () => {
    setShowLoginModal(true);
    setLoginError(false);
  };

  const openRegisterModal = () => {
    setShowRegisterModal(true);
    setRegisterError(false);
  };

  const closeModal = () => {
    setShowLoginModal(false);
    setShowRegisterModal(false);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
 
      if (email === ' ' && password === ' ') {
        setShowLoginModal(false);
        navigate('/home');
      } else {
        setLoginError('Invalid username or password. Please try again.');
      }
  // Handle login authentication
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setShowRegisterModal(false);
    // Handle registration logic
  };

  const menuItems = [
    {
      title: 'HOME',
      path: '/home',
      cName: 'nav-text'
    },
    {
      title: 'HISTORY',
      path: '/history',
      cName: 'nav-text'
    },
    {
      title: 'PROFILE',
      path: '/profile/:id',
      cName: 'nav-text'
    },
    {
      title: 'LOG OUT',
      path: '/',
      cName: 'nav-text'
    },
  ];

  return (
    <div >
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <h3><FaBars onClick={showSidebar} /></h3>
          <div className='brand'>
          <button type="button" className="btn btn-light" onClick={openLoginModal}>
            LOG IN
          </button>
          <button type="button" className="btn btn-light" onClick={openRegisterModal}>
            REGISTER
          </button>
          </div>
          </div>
        
      </nav>
      <Sidebar sidebar={sidebar} closeSidebar={showSidebar} menuItems={menuItems} />
      
      {/* Login Modal */}
      <Modal
        isOpen={showLoginModal}
        onRequestClose={closeModal}
        contentLabel="Login Modal"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <div className="center-align">
          <form onSubmit={handleLoginSubmit}>
            <h4>LOG IN</h4>
            {loginError && (
              <div className="alert alert-danger" role="alert">
                Invalid email or password. Please try again.
              </div>
            )}
            <div className="form-group">
              <label htmlFor="loginEmail">Email address</label>
              <input
                type="email"
                className="form-control"
                id="loginEmail"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="loginPassword">Password</label>
              <input
                type="password"
                className="form-control"
                id="loginPassword"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <br />
            <Link to='/home'  type="submit" onClick={closeModal} className="btn btn-primary">
              LOG IN
            </Link>
          </form>
        </div>
      </Modal>

      {/* Registration Modal */}
      <Modal
        isOpen={showRegisterModal}
        onRequestClose={closeModal}
        contentLabel="Registration Modal"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <div className="center-align">
          <form onSubmit={handleRegisterSubmit}>
            <h4>REGISTER</h4>
            {registerError && (
              <div className="alert alert-danger" role="alert">
                Registration failed. Please try again.
              </div>
            )}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                placeholder="Enter phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="college">College</label>
              <input
                type="text"
                className="form-control"
                id="college"
                placeholder="Enter college name"
                value={college}
                onChange={(e) => setCollege(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="registerPassword">Password</label>
              <input
                type="password"
                className="form-control"
                id="registerPassword"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <br />
            <Link to='/home' type="submit" onClick={closeModal}
            className="btn btn-primary">
              Submit
            </Link>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Navbar;
