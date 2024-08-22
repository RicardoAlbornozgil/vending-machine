import React from 'react';
import Item from '../Item/Item';
import waferImage from '../../assets/images/wafer.jfif';


function Wafer() {
  return (
    <Item 
      name="Wafer" 
      imageSrc={waferImage} 
      actionText="Eat" 
      onAction={() => console.log("Wafer eaten")}
    />
  );
}

export default Wafer;
