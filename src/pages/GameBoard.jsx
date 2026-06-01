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

  //const [useAutoMode, setAutoMode] = useState(false);

  const [usePDeckSize, setPDeckSize] = useState(0);
  const [usePcDeckSize, setPcDeckSize] = useState(0);

  const [usePHand, setPHand] = useState([]);
  const [usePcHand, setPcHand] = useState([]);

  const pDeck = useRef([]);
  const pcDeck = useRef([]);

  const pHand = useRef([]);
  const pcHand = useRef([]);

  const auto = useRef(false);
  const onHand = useRef(false);

  //==================================================================<
  const toMain = () => { navigate('/') };

  const switchMode = () => { setAutoMode(!useAutoMode); };

  const shouffleCards = (arr) => { arr.sort(() => Math.random() - 0.5); };

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const updateUI = () => {
    setPDeckSize(pDeck.current.length);
    setPcDeckSize(pcDeck.current.length);

    setPHand(pHand.current);
    setPcHand(pcHand.current);
  };

  const createCardDeck = () => {
    for (let i = 1; i <= 4; i++)
      for (let j = 2; j <= 14; j++)
        pcDeck.current.push({ power: j, type: i });

    if (debug) console.log("E: New card deck was made");
  };

  const splitTheDeck = () => {
    while (pDeck.current.length < 26)
      pDeck.current.push(pcDeck.current.shift());

    if (debug) console.log("E: The deck was split equally between the players");
  };

  const handPower = (array) => {
    let sum = 0;

    array.map((element) => {
      sum += element.power;
    });

    return sum;
  };

  const collectCards = async (wDeck, wHand, lHand) => {
    if (!wDeck || !wHand || !lHand) return;

    shouffleCards(wHand);
    shouffleCards(lHand);

    while (wHand.length !== 0) {
      wDeck.unshift(wHand.shift());
      wDeck.unshift(lHand.shift());

      updateUI();
      await sleep(200);
    }

    onHand.current = false;
  };

  const endGame = (winner) => {
    if (debug) console.log(`${winner} Won!`);

    // ENDGAME SCREEN HERE
  };

  const powerTest = async () => {
    const pPower = handPower(pHand.current);
    const pcPower = handPower(pcHand.current);
    // if player has the strongest hand
    if (pPower > pcPower) collectCards(pDeck.current, pHand.current, pcHand.current);
    // if computer has the strongest hand
    else if (pPower < pcPower) collectCards(pcDeck.current, pcHand.current, pHand.current);
    else { // < if a tie 
      if (pDeck.current.length < 4) endGame('Computer');
      else if (pcDeck.current.length < 4) endGame('Player');
      else {
        for (let i = 0; i < 4; i++) {
          pHand.current.unshift(pDeck.current.pop());
          pcHand.current.unshift(pcDeck.current.pop());

          updateUI();
          await sleep(1000);
        }

        await sleep(2000);
        powerTest();
      }
    }
  };

  const makeATurn = async () => {
    if (!!onHand.current) return;

    onHand.current = true;

    const pDL = pDeck.current.length;
    const pcDL = pcDeck.current.length;

    if (!!pDL && !!pcDL) { // < in case if both players still have cards in their decks
      pHand.current.unshift(pDeck.current.pop());
      pcHand.current.unshift(pcDeck.current.pop());

      updateUI();
      await sleep(1500);
      powerTest();
    }
    else { // < in case if one of the players lost all the cards in their deck
      if (!pDL) endGame('Computer');
      else endGame('Player');
    }

    if (debug) console.log('E: Card has been pulled');
  };

  const autoPlay = async () => {
    auto.current = !auto.current;

    if (!auto.current) return;

    while (pDeck.current.length && pcDeck.current.length && auto.current) await makeATurn();
  };

  //==================================================================<
  useEffect(() => {
    createCardDeck();

    shouffleCards(pcDeck.current);

    splitTheDeck();
  }, []);

  useEffect(() => updateUI(), [pDeck.current, pcDeck.current]);

  /*useEffect(() => {
    autoPlay();
  }, [useAutoMode]);*/

  return (<Wrap>

    <div className='w flex w-100 w-unit-per f-res gap-15 justify-c-c'>
      {/* AUTO MODE = TRUE, MUST PREVENT PULL CARD OPTION */}
      <Button w={'w-res w-12 w-unit-rem'} b={true} onClick={toMain} value={'To Main'} />
      <Button w={'w-res w-12 w-unit-rem'} b={true} onClick={makeATurn} value={'Pull Card'} />
      <Button w={'w-res w-12 w-unit-rem'} b={true} onClick={autoPlay} value={'Auto Play'} />

    </div>
    <BackBoard w={'max-w-40'} cust={'justify-c-ard'}>

      <div className='w h flex w-res h-res h-16 h-unit-rem f-res gap-10'>

        <Card sh={'box-sh-sm-o-3'} card={jokerCard} flipable={false} />
        <StockPile stock={usePcHand} />

      </div>
      <div className='w flex font w-res f-res justify-c-ard c-dark c-op-md font-w-7'>
        <span><p>Computer Deck: {usePcDeckSize}</p></span>
        <span><p>Players Deck: {usePDeckSize}</p></span>
      </div>
      {/* AUTO MODE = TRUE, MUST PREVENT PULL CARD OPTION */}
      <div className='w h flex w-res h-res h-16 h-unit-rem f-res gap-10 relative'>

        <Card cust={usePDeckSize == 0 ? 'none' : ''} sh={'box-sh-sm-o-3'} card={jokerCard} flipable={false} />
        <StockPile stock={usePHand} />
        <input className={`w h b bg w-res h-res bg-res b-res bg-c-light bg-c-op-full absolute`} type='button' onClick={makeATurn} />

      </div>

    </BackBoard>
    <InitialsTag cust={'text text-d-und text-d-s-solid text-d-t-1'} />
    <InitialsTag cust={'m-t-0'} value={'War-Game'} />

  </Wrap>)
}
