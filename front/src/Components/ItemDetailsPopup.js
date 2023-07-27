import React from 'react';
import './style.css'

const ItemDetailsPopup = ({ item, onClose, onProceed }) => {
  return (
    <div className="popup">
      <div className="popup-content">
      
        <img src={item.img} alt={item.name} style={{width:"200px",height:"200px"}}/>
        <h3>{item.name}</h3>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default ItemDetailsPopup;
