import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const Confirm = () => {
  const [userDetails, setUserDetails] = useState({
    name: 'SWATHI D',
    email: 'swathidharma11@mcc.edu.in',
    eventName: 'Concert Night',
    collegeName: 'Awesome University',
    venue: 'Main Auditorium',
    date: '2024-02-14',
    artist: 'Superstar Performer', 
    // Add more user details as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Confirmation</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" value={userDetails.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="text" name="email" value={userDetails.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          Event Name:
          <input type="text" name="eventName" value={userDetails.eventName} onChange={handleChange} />
        </label>
        <br />
        <label>
          College Name:
          <input type="text" name="collegeName" value={userDetails.collegeName} onChange={handleChange} />
        </label>
        {/* Add more input fields for other details as needed */}
      </form>
      <div>
        <h4>Scan it</h4>
        {userDetails.name && userDetails.email && (
          <QRCode
            value={`${userDetails.name}, ${userDetails.email}, ${userDetails.eventName}, ${userDetails.collegeName}`}
            size={200}
            level="H"
            includeMargin={true}
          />
        )}
      </div>
    </div>
  );
};

export default Confirm;
