import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import StockPile from '../components/StockPile';

import Wrap from '../components/Wrap';
import BackBoard from '../components/BackBoard';
import Button from '../components/Button';
import Card from '../components/Card';
import InitialsTag from '../components/InitialsTag';

export default function Board() {
  const navigate = useNavigate();

  const debug = true; // < debug state, allows/prevents console outprints.

  const jokerCard = { power: 15, type: 5 }; // < default card face

  const [useAutoMode, setAutoMode] = useState(false);

  const [usePDeckSize, setPDeckSize] = useState(0);
  const [usePcDeckSize, setPcDeckSize] = useState(0);

  const pDeck = useRef([]);
  const pcDeck = useRef([]);

  const pHand = useRef([]);
  const pcHand = useRef([]);

  //==================================================================<
  const toMain = () => { navigate('/') }

  const switchMode = () => { setAutoMode(!useAutoMode); }

  const shouffleCards = (arr) => { arr.sort(() => Math.random() - 0.5); }

  const updateUI = () => {
    setPDeckSize(pDeck.current.length);
    setPcDeckSize(pcDeck.current.length);
  }

  const createCardDeck = () => {
    for (let i = 1; i <= 4; i++)
      for (let j = 2; j <= 14; j++)
        pcDeck.current.push({ power: j, type: i });

    if (debug) console.log("E: New card deck was made");
  }

  const splitTheDeck = () => {
    while (pDeck.current.length < 26)
      pDeck.current.push(pcDeck.current.shift());

    if (debug) console.log("E: The deck was split equally between the players");
  }

  const handPower = (array) => {
    let sum = 0;

    array.map((element) => {
      sum += element.power;
    });

    return sum;
  }

  const pullCard = () => {
    pHand.current.unshift(pDeck.current.pop());

    updateUI();

    if (debug) console.log('E: Card has been pulled');
  }
  /*
     const pullCard = () => {
      if(player_deck.length !== 0 && computer_deck.length !== 0){
      player_pool.push(player_deck.shift());
      computer_pool.push(computer_deck.shift());
  
      print_game_stats();
  
      const player_power = handPower(player_pool);
      const computer_power = handPower(computer_pool);
  
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
          if(debug) console.log("Computer Won!");
         // setDisplay(<Score win={1}/>);
        }
        else if(computer_deck.length < 4) {
          if(debug) console.log("Player Won!");
          //setDisplay(<Score win={2}/>);
        }
  
        for(let i = 0; i < 3; i++){
          player_pool.push(player_deck.shift());
          computer_pool.push(computer_deck.shift());
        }
  
        pullCard();
      }
     }
    else {
      if(player_deck.length === 0) {
        if(debug) console.log("Computer Won!");
        //setDisplay(<Score win={1}/>);
      }
      else {
        if(debug) console.log("Player Won!");
        //setDisplay(<Score win={2}/>);
      }
    }
    }
  */

  //==================================================================<
  useEffect(() => {
    createCardDeck();

    shouffleCards(pcDeck.current);

    splitTheDeck();
  }, []);

  useEffect(() => updateUI(), [pDeck.current, pcDeck.current]);

  return (<Wrap>

    <div className='w flex w-100 w-unit-per f-res gap-15 justify-c-c'>
      {/* AUTO MODE = TRUE, MUST PREVENT PULL CARD OPTION */}
      <Button w={'w-res w-12 w-unit-rem'} b={true} onClick={toMain} value={'To Main'} />
      <Button w={'w-res w-12 w-unit-rem'} b={true} onClick={pullCard} value={'Pull Card'} />
      <Button w={'w-res w-12 w-unit-rem'} b={true} onClick={switchMode} value={'Auto Play'} />

    </div>
    <BackBoard w={'max-w-40'} cust={'justify-c-ard'}>

      <div className='w h flex w-res h-res h-16 h-unit-rem f-res gap-10'>

        <Card sh={'box-sh-sm-o-3'} card={jokerCard} flipable={false} />
        <StockPile stock={pcHand.current} />

      </div>
      <div className='w flex font w-res f-res justify-c-ard c-dark c-op-md font-w-7'>
        <span><p>Computer Deck: {usePcDeckSize}</p></span>
        <span><p>Players Deck: {usePDeckSize}</p></span>
      </div>
      {/* AUTO MODE = TRUE, MUST PREVENT PULL CARD OPTION */}
      <div className='w h flex w-res h-res h-16 h-unit-rem f-res gap-10 relative'>

        <Card cust={usePDeckSize == 0 ? 'none' : ''} sh={'box-sh-sm-o-3'} card={jokerCard} flipable={false} />
        <StockPile stock={pHand.current} />
        <input className={`w h b bg w-res h-res bg-res b-res bg-c-light bg-c-op-full absolute`} type='button' onClick={pullCard} />

      </div>

    </BackBoard>
    <InitialsTag cust={'text text-d-und text-d-s-solid text-d-t-1'} />
    <InitialsTag cust={'m-t-0'} value={'War-Game'} />

  </Wrap>)
}
