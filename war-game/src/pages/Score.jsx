import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Card from '../components/Card';

export default function Score({ scores, win }) {
  const navigate = useNavigate();

  const [load, setLoad] = useState(true);
  const [winningPrase, setWinningPharsse] = useState("You Won!");
  const [useList, setList] = useState(scores);

  const toMain = () => { navigate('/'); }

  const jokerCard = { power: 15, type: 5, state: false };
  const testArr = [{name: 'Dan', score: 10}, {name: 'Denis', score: 12},{name: 'Dima', score: 2}];

  if (load) {
    setLoad(!load);
/*
    switch (win) {
      case 1:
        setWinningPharsse("Computer Won!");
        break;
      case 2:
        setWinningPharsse("Player Won!");
        break;
      default:
        setWinningPharsse(null);
        break;
    }
*/
    console.log(winningPrase);
  }

  useEffect(() => {
    setList(testArr);
  },[]);

  return (<div className='w-screen h-screen px-[10rem] py-[5rem] flex justify-center bg-emerald-600'>

    <div className='w-full h-full max-w-[40rem] px-[7rem] py-[3rem] blur-box bg-white/25 flex flex-col justify-center rounded-lg'>

      <p className='text-orange-50 underline decoration-black decoration-wavy underline-offset-8 decoration-4 text-[5rem] drop-shadow-md font-bold align-middle text-center'>Score List</p>
      <p className={`${win != null? 'hidden' : ''} text-center bg-white/95 rounded-lg text-black drop-shadow-sm font-bold text-2xl my-3`}>{winningPrase}</p>
      <div className={`bg-white/95 rounded-lg px-3 py-4 mt-5`}>
        {
          useList?.map((el) => {
            return (<div className='flex flex-row justify-between border-b-black border-b-2'>
              <p className='font-medium'>{el.name}</p>
              <p className='font-bold'>{el.score}</p>
            </div>);
          })
        }
      </div>
      <div className='mt-5 flex justify-center rotate-90 hover:rotate-0 transition-all duration-500 delay-75'>
        <Card card={jokerCard} customDesc={'Menu'} turn={true} onClick={toMain} />
      </div>

    </div>

  </div>)
}
