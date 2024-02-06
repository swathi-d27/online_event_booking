import React from 'react'; // Adjust the import path based on your project structure
// Ensure the import statement has the correct case
import './EventDisplay.css';

import myImage from './concert-image1.jpg';
import { Link } from 'react-router-dom';

const  Display= ({ eventName, collegeName, venue, date, artist, imageUrl }) => {
  return (
    <div className='con'>
         <img src={myImage}  
        style={{ width: '600px', height: '400px' }}  />
 
      <h2>{eventName}</h2>
      <p>College: {collegeName}</p>
      <p>Venue: {venue}</p>
      <p>Date: {date}</p>
      <p>Artist: {artist}</p>
      <Link to ="/qr"  className="btn btn-primary">BOOK NOW</Link>
      </div>
  );
};


const EventDisplay = () => {
  const eventData = {
    eventName: 'Concert Night',
    collegeName: 'Awesome University',
    venue: 'Main Auditorium',
    date: '2024-02-14',
    artist: 'Superstar Performer', // Update with the actual path to your image
  };

  return (
    <div>
      <Display {...eventData} />
    </div>
  );
};

export default EventDisplay;
