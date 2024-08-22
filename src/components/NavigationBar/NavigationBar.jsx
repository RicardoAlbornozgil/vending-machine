import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationBar.css';

function NavigationBar() {
  return (
    <nav className="nav-bar">
      <NavLink 
        to="/coffee" 
        activeClassName="active-link"
        className="nav-link"
      >
        Coffee
      </NavLink>
      <NavLink 
        to="/milktea" 
        activeClassName="active-link"
        className="nav-link"
      >
        Milk Tea
      </NavLink>
      <NavLink 
        to="/wafer" 
        activeClassName="active-link"
        className="nav-link"
      >
        Wafer
      </NavLink>
    </nav>
  );
}

export default NavigationBar;
