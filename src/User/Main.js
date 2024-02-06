import React from 'react';
import Modal from 'react-modal';
import './Main.css'; // Import your CSS file for styling
import gifImage from './main.gif'; // Correct the import path

Modal.setAppElement('#root'); // Set the root element to handle accessibility

const Main = () => {
  return (
    <div className="center-container"> {/* Apply a class to center the content */}
  
      <img src={gifImage} alt="Animated GIF" className="center-image" /> {/* Apply a class to center the image */}
    </div>
  );
};

export default Main;
