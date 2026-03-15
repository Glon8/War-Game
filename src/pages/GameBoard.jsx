import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import StockPile from '../components/StockPile';

import Card from '../components/Card';

export default function Board() {
   const [use_player_pool_size, set_player_pool_size] = useState(0);
   const [use_computer_pool_size, set_computer_pool_size] = useState(0);

   const card_deck = [];
   const player_deck =[];
   const computer_deck =[];

   const player_pool = [];
   const computer_pool = [];

   const jokerCard = {power: 15, type: 5, state: false};

   const defCard = {power: 1, type: 1, state: false}
   const stock = [defCard, defCard, defCard]

   //===================================================================== functions
   const navigate = useNavigate();

   const toMain = () => { navigate('/') }
   const toScore = () => { navigate('/score') }

   const  shouffleCards = async (arr) => {arr.sort(() => Math.random() - 0.5);}

   const createCardDeck = async () => {
    for(let i = 1; i <= 4; i++){
      for(let j = 2; j <= 14; j++){
        card_deck.push({power: j, type: i, state: false});
      }
    }

    console.log("New card deck was made.")
   }

   const splitTheDeckBetweenThePlayers = async () => {
    while(card_deck.length !== 0){
      player_deck.push(card_deck.shift());
      computer_deck.push(card_deck.shift());
    }

    console.log("The deck was split equally between the players.")
   }

   const count_piles_size = () => {
    set_player_pool_size(player_pool.length);
    set_computer_pool_size(computer_pool.length);
   }

   const shouffle_both_pools = () => {
    shouffleCards(player_pool);
    shouffleCards(computer_pool);
   }

   const print_game_stats = () => {
    console.log("players deck: " + player_deck.length + " computers deck: " + computer_deck.length);
    console.log("players pool size: " + player_pool.length + " computers pool size: " + computer_pool.length);
    console.log("players pool power: " + power_sum(player_pool) + " computers pool power: " + power_sum(computer_pool));
    console.log("");
   }

   const power_sum = (array) => {
    let sum = 0;

    array.map((element) => {
      sum += element.power;
    });

    return sum;
   }

   const pull_card = () => {
    if(player_deck.length !== 0 && computer_deck.length !== 0){
    player_pool.push(player_deck.shift());
    computer_pool.push(computer_deck.shift());

    print_game_stats();

    const player_power = power_sum(player_pool);
    const computer_power = power_sum(computer_pool);

    if(player_power > computer_power) { //      < if player has the strongest pool of cards
      shouffle_both_pools();

      count_piles_size();

      while(player_pool.length !== 0) player_deck.push(player_pool.shift());
      while(computer_pool.length !== 0) player_deck.push(computer_pool.shift());
    }
    else if(player_power < computer_power){ //   < if computer has the strongest pool of cards
      shouffle_both_pools();

      count_piles_size();

      while(computer_pool.length !== 0) computer_deck.push(computer_pool.shift());
      while(player_pool.length !== 0) computer_deck.push(player_pool.shift());
    }
    else{ //                                      < if tie
      if(player_deck.length < 4) {
        console.log("Computer Won!");
       // setDisplay(<Score win={1}/>);
      }
      else if(computer_deck.length < 4) {
        console.log("Player Won!");
        //setDisplay(<Score win={2}/>);
      }

      for(let i = 0; i < 3; i++){
        player_pool.push(player_deck.shift());
        computer_pool.push(computer_deck.shift());
      }

      pull_card();
    }
   }
  else {
    if(player_deck.length === 0) {
      console.log("Computer Won!");
      //setDisplay(<Score win={1}/>);
    }
    else {
      console.log("Player Won!");
      //setDisplay(<Score win={2}/>);
    }
  }
  }

   //===================================================================== useEfect to update
   useEffect(() => {
    createCardDeck();

    shouffleCards(card_deck);

    splitTheDeckBetweenThePlayers();
   });

  return (<div className='w-screen h-screen px-[10%] py-[2%] flex justify-center overflow-hidden bg-emerald-600'>
  
      <div className='w-full h-full px-[2rem] py-[2%] blur-box bg-white/25 flex flex-col justify-center rounded-lg'>

        <div className='flex relative'>
          <div><Card card={defCard} turn={false} /></div>
          <div className='w-[70%] mx-20 absolute right-20'><StockPile stock={computer_pool} /></div>
        </div>
        <div className='flex mt-[10%] justify-between relative'>
          <div><Card card={defCard} turn={false} onClick={pull_card} /></div>
          <div className='w-[70%] mx-20 absolute right-20'><StockPile stock={stock} /></div>
          <div><Card card={jokerCard} customDesc={'Main'} turn={true} onClick={toMain}/></div>
        </div>

      </div>
  
    </div>)
}

/*
const [load, setLoad] = useState(true);

   const [display, setDisplay] = useState();
*/

  /*const showThePile = () => {
    console.log("player deck: " + pDeck.length + "computer deck: " + cDeck.length);
    console.log("player pool: " + playerPool.length + "computer pool: " + computerPool.length);
  }*/

  //===================================================================== first load  
  /*if(load) {
    setLoad(!load);

    for(let i = 1; i <= 4; i++){
      for(let j = 2; j <= 14; j++){
        cardDeck.push({power: j, type: i, state: 0});
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

   const defCard = {power: 1, type: 1, state: false}
   const stock = [defCard, defCard, defCard, defCard, defCard, defCard]
   */
/* 
useEffect(() => {
      setDisplay(<div className='bg-emerald-600'>
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
   },[ pCount, cCount, pOpen, cOPen, pDeck, cDeck]);*/

   /*
    <input onClick={pullCard} type='button' value="pull card"/>
    <input onClick={showThePile} type='button' value="show piles size"/>
   */
        
  //return (<div>{display}</div>)
