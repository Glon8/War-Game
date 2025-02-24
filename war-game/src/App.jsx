import './App.css';
import React, { useState } from 'react';

import Board from './components/Board';
//import Score from './components/Score';

function App() {
  const [display, setDisplay] = useState();

  const [load, setLoad] = useState(true);

  const toBoard = () => {setDisplay(<Board/>);}

  /*const toScore = () => {setDisplay(<Score win={0}/>);}
    <input type='button' onClick={toScore} value='Score'/>
  */

  if(load){
    setLoad(!load);

    setDisplay(<div>
      <h1>War-Game</h1>
      <input type='button' onClick={toBoard} value='Start The Game'/>
      </div>);
  }

  return (<div className="App">{display}</div>);
}

export default App;
