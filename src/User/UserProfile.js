import React, { useState } from 'react';
import './UserProfile.css';

const UserProfile = () => {
  const [formData, setFormData] = useState({
    name: 'SWATHI D',
    email: 'swathidharma11@mcc.edu.in',
    mobile: '7540031609',
    college: 'MCC',
    shift: 'SFS',
    password: '2717',
    confirmPassword: '2717',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    mobile: '',
    college: '',
    shift: '',
    password: '',
    confirmPassword: '',
  });

  const colleges = ['MCC', 'College B', 'College C']; // Add your college options

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      mobile: '',
      college: '',
      shift: '',
      password: '',
      confirmPassword: '',
    };

    // Simple validation (you can add more complex validation if needed)
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Invalid mobile number';
    }

    if (!formData.college) {
      newErrors.college = 'Please select a college';
    }

    if (!formData.shift) {
      newErrors.shift = 'Please select a shift';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);

    // Return true if there are no errors
    return Object.values(newErrors).every((error) => error === '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form before submitting
    if (validateForm()) {
      // Submit the form (you can send data to a server, etc.)
      console.log('Form submitted:', formData);
    } else {
      console.log('Form has errors. Please fix them.');
    }
  };

  return (
    <div>
      <h2>Student Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <span className="error">{errors.name}</span>
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <span className="error">{errors.email}</span>
        </div>

        <div>
          <label htmlFor="mobile">Mobile Number:</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
          <span className="error">{errors.mobile}</span>
        </div>

        <div>
          <label htmlFor="college">College:</label>
          <select
            id="college"
            name="college"
            value={formData.college}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select College
            </option>
            {colleges.map((college) => (
              <option key={college} value={college}>
                {college}
              </option>
            ))}
          </select>
          <span className="error">{errors.college}</span>
        </div>

       

        <div>
          <label htmlFor="password"> Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <span className="error">{errors.password}</span>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default UserProfile;
