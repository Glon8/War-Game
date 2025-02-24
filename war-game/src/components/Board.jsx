import React, {useEffect, useState} from 'react'

import Card from './Card';
import Score from './Score';

export default function Board() {
   const [load, setLoad] = useState(true);

   const [pDeck, setPDeck] = useState([]);
   const [cDeck, setCDeck] = useState([]);
   
   const [pOpen, setPOpen] = useState({power: 1, type: 0});
   const [cOPen, setCOpen] = useState({power: 1, type: 0});
   
   const [pCount, setPCount] = useState(0);
   const [cCount, setCCount] = useState(0);

   const [display, setDisplay] = useState();

   const cardDeck = [];
   const playerDeck =[];
   const computerDeck =[];

   const playerPool = [];
   const computerPool = [];

   //===================================================================== functions
   const shouffleCards = (arr) => {arr.sort(() => Math.random() - 0.5);}

   const pullCard = () => {
    if(pDeck.length !== 0 && cDeck.length !== 0){
    const playerCard = pDeck.shift();
    const computerCard = cDeck.shift();

    playerPool.push(playerCard);
    computerPool.push(computerCard);

    console.log("original player deck: " + pDeck.length + "original computer deck: " + cDeck.length);
    console.log("player pool: " + playerPool.length + "computer pool: " + computerPool.length);

    setPOpen(playerCard);
    setCOpen(computerCard);

    console.log("player open card: " + pOpen.power + " pc open card: " + cOPen.power);

    if(playerPool[playerPool.length-1].power > computerPool[computerPool.length-1].power) { //      < if player has the strongest card
      shouffleCards(playerPool);
      shouffleCards(computerPool);

      setPCount(playerPool.length);
      setCCount(computerPool.length);

      while(playerPool.length !== 0) pDeck.push(playerPool.shift());
      while(computerPool.length !== 0) pDeck.push(computerPool.shift());
    }
    else if(playerPool[playerPool.length-1].power < computerPool[computerPool.length-1].power){ //   < if computer has the strongest card
      shouffleCards(playerPool);
      shouffleCards(computerPool);

      setPCount(playerPool.length);
      setCCount(computerPool.length);

      while(computerPool.length !== 0) cDeck.push(computerPool.shift());
      while(playerPool.length !== 0) cDeck.push(playerPool.shift());
    }
    else{ //                                                                                         < if tie
      if(pDeck.length < 4) {
        console.log("Computer Won!");
        setDisplay(<Score win={1}/>);
      }
      else if(cDeck.length < 4) {
        console.log("Player Won!");
        setDisplay(<Score win={2}/>);
      }

      for(let i = 0; i < 3; i++){
        playerPool.push(pDeck.shift());
        computerDeck.push(cDeck.shift());
      }

      pullCard();
    }
  }
  else {
    if(pDeck.length === 0) {
      console.log("Computer Won!");
      setDisplay(<Score win={1}/>);
    }
    else {
      console.log("Player Won!");
      setDisplay(<Score win={2}/>);
    }
  }
  }

  const showThePile = () => {
    console.log("player deck: " + pDeck.length + "computer deck: " + cDeck.length);
    console.log("player pool: " + playerPool.length + "computer pool: " + computerPool.length);
  }

   //===================================================================== first load  
  if(load) {
    setLoad(!load);

    for(let i = 1; i <= 4; i++){
      for(let j = 2; j <= 14; j++){
        cardDeck.push({power: j, type: i});
      }
    }

    shouffleCards(cardDeck);

    for(let i = 0; i < cardDeck.length; i++){
      if(i%2===0) playerDeck.push(cardDeck[i]);
      else computerDeck.push(cardDeck[i]);
    };

    setPDeck(playerDeck);
    setCDeck(computerDeck);
   }

   //===================================================================== useEfect to update

   useEffect(() => {
      setDisplay(<div>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
          <h1 style={{marginRight: '5rem'}}>The computer deck:</h1>
          <Card card={{power: 1, type: 0}}/>
          <p className={pOpen.status === 0? 'none' : ''} style={{marginLeft: '2rem',fontSize:'2rem'}}>x {cDeck.length}</p>
        </div>
        <div style={{display: 'flex',flexDirection: 'row', justifyContent: 'center', alignItems:'center'}}>
            <h2 style={{marginRight: '5rem'}}>The computer pile:</h2>
            <div className={cOPen.status === 0? 'none' : ''}>
              <Card card={cOPen}/>
            </div>
            <p className={cOPen.status === 0? 'none' : ''} style={{marginLeft: '2rem',fontSize:'2rem'}}>x {cCount}</p>
        </div>
        <div style={{display:'flex',flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
            <h2 style={{marginRight: '5rem'}}>The player pile:</h2>
            <div className={pOpen.status === 0? 'none' : ''}>
              <Card card={pOpen}/>
            </div>
            <p className={pOpen.status === 0? 'none' : ''} style={{marginLeft: '2rem',fontSize:'2rem'}}>x {pCount}</p>
        </div>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
          <h1 style={{marginRight: '5rem'}}>The player deck:</h1>
          <button style={{backgroundColor: "white", border: "none"}} onClick={pullCard}>
            <Card card={{power: 1, type: 0}} onClick={pullCard}/>
          </button>
          <p className={pOpen.status === 0? 'none' : ''} style={{marginLeft: '2rem',fontSize:'2rem'}}>x {pDeck.length}</p>
        </div>
      </div>);
   },[pOpen, cOPen, pCount, cCount, pDeck, cDeck]);

   /*
    <input onClick={pullCard} type='button' value="pull card"/>
    <input onClick={showThePile} type='button' value="show piles size"/>
   */
        
  return (<div>{display}</div>)
}