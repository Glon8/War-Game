import React, { useEffect, useState } from 'react'

import Card from './Card';

// <StockPile stock={null} originalLength={0} />

export default function StockPile({ stock }) {
  const [useSt, setSt] = useState([]);

  useEffect(() => setSt(stock), [stock]);

  return (<div className='w h flex 
    w-res w-70 w-unit-per 
    h-res
    f-res
    align-i-c
    relative
    dir-unit-per'>

    <div className={`absolute ${!useSt?.[4] ? 'none' : ''}`}><Card card={useSt[4]} flipable={false} stat={false} /></div>
    <div className={`absolute left-16 ${!useSt?.[3] ? 'none' : ''}`}><Card card={useSt[3]} flipable={false} stat={true} /></div>
    <div className={`absolute left-32 ${!useSt?.[2] ? 'none' : ''}`}><Card card={useSt[2]} flipable={false} stat={true} /></div>
    <div className={`absolute left-48 ${!useSt?.[1] ? 'none' : ''}`}><Card card={useSt[1]} flipable={false} stat={true} /></div>
    <div className={`absolute left-64 ${!useSt?.[0] ? 'none' : ''}`}><Card card={useSt[0]} flipable={false} stat={true} /></div>

  </div>)
}
