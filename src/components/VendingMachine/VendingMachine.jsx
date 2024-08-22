import React from 'react';
import { NavLink } from 'react-router-dom';
import './VendingMachine.css';  
import NavigationBar from '../NavigationBar/NavigationBar';

function VendingMachine() {
  return (
    <div className="vending-machine-container">
      <nav>
        <NavigationBar ></NavigationBar>
      </nav>
      <h1>Vending Machine</h1>
      <div className="body">
        <div className="text-container">
            <p className='box-text'>
            In Japan, there's a vending machine for every 23 people, selling everything from fresh eggs to hot ramen, reflecting the country's love for convenience and innovation.
            </p>
        </div>
        <div className="text-container">
            <ul>
                <li><NavLink to="/coffee" className='box-text'>Coffee</NavLink></li>
                <li><NavLink to="/milktea" className='box-text'>Milk Tea</NavLink></li>
                <li><NavLink to="/wafer" className='box-text'>Wafer</NavLink></li>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default VendingMachine;
