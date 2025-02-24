import React, { useState } from 'react'

import App from '../App';

export default function Score({win}) {
  const [display, setDisplay] = useState();
  const [load, setLoad] = useState(true);

  const [winningPrase, setWinningPharsse] = useState();

  const returnToMain = () => {
    setDisplay(<App/>);
  }

  if(load){
    setLoad(!load);

    switch(win){
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

    console.log(winningPrase);

    setDisplay(<div>
      <h1>{winningPrase}</h1>
      <button onClick={returnToMain}>To Main Menu</button>
    </div>);
  }


  return (<div>{display}</div>)
}
