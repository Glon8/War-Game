import React from 'react'

import Card from './Card';

// <StockPile stock={null} originalLength={0} />

export default function StockPile({ stock }) {

  const jokerCard = { power: 15, type: 5 };

  return (<div className='w h flex 
  w-res w-50 w-unit-per 
  h-res
  f-res
  align-i-c'>

    <div className='flex f-res justify-center relative'>
      {
        stock?.map((element, index) => {
          if (index < 4) {
            return (<div className='mx-1'>
              <Card card={element} />
            </div>);
          }
        })
      }
    </div>
    <div className={`${stock !== null && stock.length >= 5 ? 'ms-5' : 'hidden'}`}>
      <Card card={jokerCard} />
    </div>

  </div>)
}
