import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Item.css';
import NavigationBar from '../NavigationBar/NavigationBar';

function Item({ name, imageSrc, actionText, onAction }) {
  const [vendedCount, setVendedCount] = useState(1);
  const [consumedCount, setConsumedCount] = useState(0);

  const handleVend = () => {
    setVendedCount(vendedCount + 1);
  };

  const handleConsume = (index) => {
    setConsumedCount(consumedCount + 1);
    setVendedCount(vendedCount - 1);
    onAction(index);
  };

  return (
    <div className="item-page">
      <NavigationBar />
      <div className={`${name.toLowerCase()}-container item-container`}>
        <div className="heading">
          <h2>{name}</h2>
        </div>
        <div className="image-container">
          {Array.from({ length: vendedCount }).map((_, index) => (
            <div key={index} className="item">
              <img src={imageSrc} alt={name} />
              <button onClick={() => handleConsume(index)}>{actionText}</button>
            </div>
          ))}
        </div>
        <div className="footer">
          <button onClick={handleVend}>Vend Another {name}!</button>
          <p>You've vended {vendedCount} {name}(s).</p>
          <p>You've {actionText.toLowerCase()}ed {consumedCount} {name}(s).</p>
          <Link to="/">Back to Vending Machine</Link>
        </div>
      </div>
    </div>
  );
}

export default Item;
