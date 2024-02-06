
// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ sidebar, closeSidebar, menuItems }) => {
  return (
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
      <ul className='nav-menu-items' onClick={closeSidebar}>
        <li className='navbar-toggle'>
          <Link to="#" className='menu-bars'>
            CLOSE
          </Link>
        </li>
        {menuItems.map((item, index) => (
          <li key={index} className={item.cName}>
            <Link to={item.path}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
