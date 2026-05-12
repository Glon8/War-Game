import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Wrap from '../components/Wrap';
import BackBoard from '../components/BackBoard';
import Title from '../components/Title';
import Button from '../components/Button';
import InitialsTag from '../components/InitialsTag';

export default function Score({ scores, win }) {
  const navigate = useNavigate();

  const [load, setLoad] = useState(true);
  const [winningPrase, setWinningPharsse] = useState("");
  const [useList, setList] = useState(scores);

  const toMain = () => { navigate('/'); }

  const jokerCard = { power: 15, type: 5, state: false };
  const testArr = [{ name: 'Dan', score: 10 }, { name: 'Denis', score: 12 }, { name: 'Dima', score: 2 }];

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
  }, []);

  return (<Wrap>

    <BackBoard cust={'justify-c-evn'}>

      <Title font={'font-s-3 font-w-7 font-s-unit-rem'} cust={'m-t-0'} value={'Score List'} />
      <div className={`w h w-res w-95 w-unit-per h-res h-50 h-unit-per b bg bg-c-light bg-c-op-md b-r-5 p-x-3 p-y-4 mt-5`}>
        {
          useList?.map((el) => {
            return (<div className='f-res flex justify-between border-b-black border-b-2 gap-10'>
              <p className='font-medium'>{`${el.name}:`}</p>
              <p className='font-bold'>{el.score}</p>
            </div>);
          })
        }
      </div>
      <Button b={true} onClick={toMain} value={'To Main'} />

    </BackBoard>
    <InitialsTag cust={'text text-d-und text-d-s-solid text-d-t-1'} />
    <InitialsTag cust={'m-t-0'} value={'War-Game'} />

  </Wrap>)
}
