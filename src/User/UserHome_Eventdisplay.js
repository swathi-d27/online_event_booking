// Adjust the path based on your project structure
import './UserHome_Eventdisplay.css';
import React from 'react';
import { Link } from 'react-router-dom';

const ConcertCard = ({ concertId, imageSrc, title, date, time, location }) => (
  <div className="concert-card">
    {/* Add image rendering logic if needed */}
    <div className="concert-details">
      <h2 className="concert-title">{title}</h2>
      <p className="concert-info">Date: {date}</p>
      <p className="concert-info">Time: {time}</p>
      <p className="concert-info">Location: {location}</p>
      <Link to={`/event/${concertId}`} className="book-now-btn">
        BOOK NOW
      </Link>
    </div>
  </div>
);


// Example usage
const UserHome_EventDisplay = () => (
  <>
    <header>
      <h1>College Concerts - Book Your Ticket</h1>
      {/* ... (header content) */}
    </header>

    <ConcertCard
      concertId={1}
      title="College Concert 2024"
      date="April 15, 2024"
      time="7:00 PM - 10:00 PM"
      location="College Auditorium"
    />

    <ConcertCard
      concertId={2}
      title="Spring Music Fest"
      date="May 20, 2024"
      time="6:30 PM - 9:30 PM"
      location="Outdoor Amphitheater"
    />

    {/* Additional Concert Cards */}
    {/* Add more ConcertCard components as needed */}
  </>
);

export default UserHome_EventDisplay;
