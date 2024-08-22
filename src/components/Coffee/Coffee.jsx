import React from 'react';
import Item from '../Item/Item';
import coffeeImage from '../../assets/images/coffee.jfif';


function Coffee() {
  return (
    <Item 
      name="Coffee" 
      imageSrc={coffeeImage} 
      actionText="Drink" 
      onAction={() => console.log("Coffee drunk")}
    />
  );
}

export default Coffee;
