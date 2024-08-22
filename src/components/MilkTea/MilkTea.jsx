import React from 'react';
import Item from '../Item/Item';
import milkTeaImage from '../../assets/images/milktea.jfif';


function MilkTea() {
  return (
    <Item 
      name="Milk Tea" 
      imageSrc={milkTeaImage} 
      actionText="Drink" 
      onAction={() => console.log("Milk Tea drunk")}
    />
  );
}

export default MilkTea;
