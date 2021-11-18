import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      {/* <h1>Check out these EPIC Destinations!</h1> */}
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
            <CardItem
              text='SCHEDULE'
              label='Schedule'
              path='/schedule'
            />
            </ul>
            <ul className='cards__items'>
            <CardItem
              text='CEREMONY'
              label='ceremony'
              path='/ceremony'
            />
            </ul>
            <ul className='cards__items'>
            <CardItem
              text='LODGING'
              label='lodging'
              path='/lodging'
            />
            </ul>
            <ul className='cards__items'>
            <CardItem
              text='GIFTING'
              label='GIFTING'
              path='/gifting'
            />
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
