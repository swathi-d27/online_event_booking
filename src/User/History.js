import React from 'react'

import './UserHome_Eventdisplay.css';
const ConcertCard = ({ concertId, imageSrc, title, date, time, location }) => (
    <div className="concert-card">
      {/* Add image rendering logic if needed */}
      <div className="concert-details">
        <h2 className="concert-title">{title}</h2>
        <p className="concert-info">Date: {date}</p>
        <p className="concert-info">Time: {time}</p>
        <p className="concert-info">Location: {location}</p>
       
      </div>
    </div>
  );

export default function History() {
  return (
    <div><ul class="nav nav-tabs">
    <li class="nav-item">
      <a  class="nav-link active"href="#">Active</a>
    </li>
  
    <li class="nav-item">
      <a class="nav-link" href="#">Upcoming</a>
    </li>
    <li class="nav-item">
      <a class="nav-link " href="#" tabindex="-1" aria-disabled="true">UnAttended</a>
    </li>
  </ul>
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
    </div>
  )
}
