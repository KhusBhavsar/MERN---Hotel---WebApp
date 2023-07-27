import React, { useContext } from 'react';
import './style.css';
import CartContext from '../context/Context';

const ItemList = ({ img, name }) => {
  const { addToCart, items } = useContext(CartContext); // Corrected variable name

  const getItemQuantityInCart = (itemName) => {
    const item = items.find((item) => item.name === itemName); // Corrected variable name
    return item ? item.quantity : 0;
  };

  return (
    <div>
      <div
        className="card cara hovered"
        style={{
          width: '200px',
          height: '320px',
          textAlign: 'center',
          margin: '11.5px',
          color: 'white',
          marginBottom: '60px',
        }}
      >
        <img src={img} className="card-img-top" style={{ height: '200px' }} alt={name} />
        <div className="card-body">
          <h5 className="card-title">
            {name} {getItemQuantityInCart(name) > 1 && `(${getItemQuantityInCart(name)})`}
          </h5>
          <button
            className="btn btn-outline-info"
            style={{ width: '70%' }}
            onClick={() => addToCart(name)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemList;
