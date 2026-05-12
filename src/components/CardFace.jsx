import { useState, useEffect } from 'react'

import Hearts from '../images/ChatGPTHearts.webp'
import Spades from '../images/ChatGPTSpades.webp'
import Dimonds from '../images/ChatGPTDimonds.webp'
import Clubs from '../images/ChatGPTClubs.webp'
import Joker from '../images/ChatGPTJoker.webp'
import Turned from '../images/ChatGPTTurned.webp'

export default function CardFace({ face, display }) {
    const [useTitle, setTitle] = useState('');
    const [useImg, setImg] = useState(null);
    const [useAlt, setAlt] = useState('');

    const assign = (curCard) => {
        if (!curCard) curCard = { power: 0, type: 0 };

        if (curCard.power < 11 && curCard.power > 0) setTitle(curCard.power);
        else if (curCard.power == 0) setTitle("");
        else if (curCard.power == 11) setTitle("P");
        else if (curCard.power == 12) setTitle("Q");
        else if (curCard.power == 13) setTitle("K");
        else if (curCard.power == 14) setTitle("A");
        else setTitle("J");

        if (curCard.type == 0) {
            setImg(Turned);
            setAlt('Turned');
        }
        else if (curCard.type == 1) {
            setImg(Hearts);
            setAlt('Hearts');
        }
        else if (curCard.type == 2) {
            setImg(Dimonds);
            setAlt('Dimonds');
        }
        else if (curCard.type == 3) {
            setImg(Spades);
            setAlt('Spades');
        }
        else if (curCard.type == 4) {
            setImg(Clubs);
            setAlt('Clubs');
        }
        else if (curCard.type == 5) {
            setImg(Joker);
            setAlt('Joker');
        }
    }

    useEffect(() => {
        assign(face);
    }, [face]);

    return (<div className={`w h flex b bg font w-100 w-unit-per relative
    h-100 h-unit-per flex-d-c p-x-4 bg-c-light bg-c-op-no font-w-7 font-s-25 ${display ? '' : 'none'}`}>

        <div className='w h w-95 top-1 left-4 w-unit-per align-c-c absolute'><img className='w w-100 w-unit-per' src={useImg} alt={useAlt} /></div>
        <div className='w h flex w-100 h-100 w-unit-per h-unit-per justify-c-btw'>
            <div className={`h h-15 ${!!useTitle ? '' : 'none'}`} >{useTitle}</div>
            <div className={`h h-15 text text-a-r ${!!useTitle ? '' : 'none'}`}>{useTitle}</div>
        </div>

    </div >);
}
