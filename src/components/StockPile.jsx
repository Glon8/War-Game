import React from 'react'

import Card from './Card';

// <StockPile stock={null} originalLength={0} />

export default function StockPile({ stock }) {
  const defCard = { power: 1, type: 1, state: false }

  return (<div className='w-full h-[15rem] flex'>

    <div className='flex justify-center relative'>
      {
        stock?.map((element, index) => {
          if(index < 4){
            return(<div className='mx-1'>
              <Card card={element} turn={false} />
              </div>);
          }
        })
      }
    </div>
    <div className={`${stock !== null && stock.length >= 5 ? 'ms-5' : 'hidden'}`}>
      <Card card={defCard} turn={false} />
    </div>

  </div>)
}
