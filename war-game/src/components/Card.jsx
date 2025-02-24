import React, { useState, useEffect } from 'react'
import Hearts from '../images/Hearts.png'
import Spades from '../images/Spades.png'
import Dimonds from'../images/Dimonds.png'
import Clubs from '../images/Clubs.png'
import Turned from '../images/Turned.png'

const Card = ({card}) => {
    //{power: 3, type: 2, status: 1}
    const [title, setTitle] = useState();
    const [suit, setSuit] = useState('');
    const [alt, setAlt] = useState('');

    useEffect(() => {
        switch (card.power){
            case 11:
                setTitle("P");
                break;
            case 12:
                setTitle("Q");
                break;
            case 13:
                setTitle("K");
                break;
            case 14:
                setTitle("A");
                break;
            default:
                setTitle(card.power);
                break;
        }

        switch (card.type){
            case 1:
                setSuit(Hearts);
                setAlt('Hearts');
                break;
            case 2:
                setSuit(Dimonds);
                setAlt('Dimonds');
                break;
            case 3:
                setSuit(Spades);
                setAlt('Spades');
                break;
            case 4:
                setSuit(Clubs);
                setAlt('Clubs');
                break;
            default:
                setSuit(Turned);
                setAlt('Turned');
                break;
         }
    },[card]);

  return (<div className='cardBody'><p className={card.type !== 0? 'cardTitleT' : 'none'}>{title}</p><img className={card.type !== 0? 'cardImage'  : 'cardImageFlipped'} src={suit} alt={alt} /><p className={card.type !== 0? 'cardTitleB' : 'none'}>{title}</p></div>);
}

export default Card;
