import { useState, useEffect } from 'react'

import Hearts from '../images/ChatGPTHearts.webp'
import Spades from '../images/ChatGPTSpades.webp'
import Dimonds from '../images/ChatGPTDimonds.webp'
import Clubs from '../images/ChatGPTClubs.webp'
import Joker from '../images/ChatGPTJoker.webp'
import Turned from '../images/ChatGPTTurned.webp'

export default function Card({ card, state, onClick }) {
    const [useTitle, setTitle] = useState('');
    const [useImg, setImg] = useState(null);
    const [useAlt, setAlt] = useState('');
    const [useStat, setStat] = useState(state ?? false);

    const faceDown = { power: 0, type: 0 };

    // ====================================> MUST ADD FLIPPING ANIMATION IN THE FUTURE

    const flip = () => {
        setStat(!useStat);

        if (useStat) assign(faceDown);
        else assign(card);
    }

    const assign = (curCard) => {
        if (!curCard) return;

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
        if (!state) assign(faceDown);
        else assign(card);
    }, [card]);

    return (<div className='w h flex b bg font max-w-100 max-h-100 w-11 w-unit-rem
    h-17 h-unit-rem flex-d-c p-x-4 p-y-3 bg-c-light bg-c-op-no box-sh-lg-o-1 font-w-7 font-s-25'
        onClick={() => { flip(); onClick != null ? onClick?.({ card, useStat }) : null; }}>

        <div className='h h-2'>{useTitle}</div>
        <div className='w h w-100 w-unit-per align-c-c'><img className='w w-100 w-unit-per' src={useImg} alt={useAlt} /></div>
        <div className='h h-2 text text-a-r'>{useTitle}</div>

    </div >);
}
