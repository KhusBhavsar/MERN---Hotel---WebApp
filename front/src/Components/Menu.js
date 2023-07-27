
import React from 'react';
import './style.css';
import ItemList from './itemList';
import airFryer from './starters/air-fryer-zucchini-chips-2.jpg';
import Aloo from './starters/aloo-pakora-1.jpg';
import bajri from './starters/bajri-vada-2.jpg';
import batata from './starters/batata-vada-2.jpg';
import leaves from './starters/dill-leaves-pakoda-5.jpg';
import caesar from './soups/Caesar-Salad-Recipe-3.jpg';
import clam from './soups/Easy-Clam-ChowderIMG_1064.jpg';
import greek from './soups/greek-salad-recipe.jpg';
import tomato from './soups/download.jpeg';
import green from './soups/Garden-salad-thumbnail.jpg';
import steak from './mainCourse/download.jpeg';
import salmon from './mainCourse/download (1).jpeg';
import chicken from './mainCourse/download (2).jpeg';
import vegetable from './mainCourse/download (3).jpeg';
import shrimp from './mainCourse/download (4).jpeg';
import 'react-multi-carousel/lib/styles.css';

const Menu = () => {
 
  const startersItems = [
    { img: airFryer, name: 'Zucchini chips' },
    { img: Aloo, name: 'Aloo pakora' },
    { img: bajri, name: 'Bajri Vada' },
    { img: batata, name: 'Batata Vada' },
    { img: leaves, name: 'Dilli Leaves Vada' },
  ];

  const Soups = [
    { img: caesar, name: 'Caesar Salad' },
    { img: tomato, name: 'Tomato Basil Soup' },
    { img: greek, name: 'Greek Salad' },
    { img: clam, name: 'Clam Chowder' },
    { img: green, name: 'Garden Salad' },
  ];

  const Course = [
    { img: salmon, name: 'Grilled Salmon' },
    { img: steak, name: 'Steak with Mashed Potatoes' },
    { img: chicken, name: 'Chicken Parmesan' },
    { img: vegetable, name: 'Vegetable Stir-Fry' },
    { img: shrimp, name: 'Shrimp Scampi' },
  ];


  return (
    <>
      <div className="body2"><br /><br /><br />
        <div className="container imageFitter height" style={{ paddingTop: '10px' }}>
        <center>
            <h2 style={{ textDecoration: 'underline', marginBottom:"20px" }}>Starters</h2>
          </center>
          <div className="listItems" style={{ display: 'flex', flexWrap: 'wrap' }}>
            {startersItems.map((item) => (
              <ItemList
                img={item.img}
                name={item.name}
              />
            ))}
          </div>
          <center>
            <h2 style={{ textDecoration: 'underline', marginBottom:"20px" }}>Soups and Salads</h2>
          </center>
          <div className="listItems" style={{ display: 'flex', flexWrap: 'wrap' }}>
            {Soups.map((item) => (
              <ItemList
                img={item.img}
                name={item.name}
              />
            ))}
          </div>
          <center>
            <h2 style={{ textDecoration: 'underline', marginBottom:"20px" }}>Main Course</h2>
          </center>
          <div className="listItems" style={{ display: 'flex', flexWrap: 'wrap' }}>
            {Course.map((item) => (
              <ItemList
                img={item.img}
                name={item.name}
              />
            ))}
          </div>
          
        </div>
      </div>

     
    </>
  );
};

export default Menu;
