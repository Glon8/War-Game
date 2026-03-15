import React, { useState, useEffect } from 'react'

import Hearts from '../images/Hearts.png'
import Spades from '../images/Spades.png'
import Dimonds from '../images/Dimonds.png'
import Clubs from '../images/Clubs.png'
import Joker from '../images/Joker.png'
import Turned from '../images/Turned.png'

export default function Card({ card, customDesc, turn, onClick }) {
    //{power: 3, type: 2, state: 0}
    const [title, setTitle] = useState('');
    const [suit, setSuit] = useState('');
    const [alt, setAlt] = useState('');
    const [useStat, setStat] = useState(card.state);
    const [useCall, setCall] = useState(false);

    const turnUp = () => {
        setTimeout(() => {
            setStat(!useStat);

            if (useStat) {
                setTitle('');
                setSuit(Turned);
                setAlt('Turned');
            }
            else assign();
        }, 260);

        setCall(true);
    }

    const assign = () => {
        switch (card.power) {
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
            case 15:
                setTitle(customDesc);
                break;
            default:
                setTitle(card.power);
                break;
        }

        switch (card.type) {
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
            case 5:
                setSuit(Joker);
                setAlt('Joker');
                break;
            default:
                setSuit(Turned);
                setAlt('Turned');
                break;
        }

    }

    useEffect(() => {
        if (card.state) assign();
        else {
            setTitle('');
            setSuit(Turned);
            setAlt('Turned');
        }
    }, [card]);

    return (<div className={`w-[9rem] h-[15rem] ${turn ? 'hover:animate-[rotate_500ms_ease-in-out_1]' : ''} ${useCall && 'animate-[rotateBack_350ms_ease-in-out_1]'} relative px-2 py-3 drop-shadow-md rounded-xl bg-[#eaebe6] border raunded-xl`} onClick={onClick}>

        <div className='absolute w-full h-full z-10 bottom-0 left-0 bg-transparent' onMouseOverCapture={turn === true ? turnUp : null} onTouchStart={turn === true ? turnUp : null} onMouseOut={turn === true ? turnUp : null}></div>

        <div className={`absolute bottom-0 left-0 mb-1 ms-2 text-xl font-bold`}>{title}</div>
        <div className={`my-[12%] ${suit === Turned? '':'border-2 border-black/10 bg-white py-[22%] rounded-lg'}`}>
            <img className={`w-[full] h-auto rounded-md`} src={suit} alt={alt} />
        </div>
        <div className={`absolute top-0 right-0 mt-1 me-2 text-xl font-bold`}>{title}</div>

    </div>);
}
