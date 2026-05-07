import { useState, useEffect, useRef } from 'react'

import Hearts from '../images/ChatGPTHearts.webp'
import Spades from '../images/ChatGPTSpades.webp'
import Dimonds from '../images/ChatGPTDimonds.webp'
import Clubs from '../images/ChatGPTClubs.webp'
import Joker from '../images/ChatGPTJoker.webp'
import Turned from '../images/ChatGPTTurned.webp'

export default function Card({ card, onClick }) {
    //{power: 3, type: 2, state: 0}
    const [useTitle, setTitle] = useState('');
    const [useImg, setImg] = useState('');
    const [useAlt, setAlt] = useState('');

    const stat = useRef(card?.state ?? false);

    /*
    const turnUp = () => {
        setTimeout(() => {
            setStat(!useStat);

            if (useStat) {
                setTitle('');
                setImg(Turned);
                setAlt('Turned');
            }
            else assign();
        }, 260);

        setCall(true);
    }
*/
    const assign = () => {
        if (card?.power < 11 && card?.power > 0) setTitle(card?.power);
        else if (card?.power == 0) setTitle("");
        else if (card?.power == 11) setTitle("P");
        else if (card?.power == 12) setTitle("Q");
        else if (card?.power == 13) setTitle("K");
        else setTitle("A");

        if (card?.type == 0) {
            setImg(Turned);
            setAlt('Turned');
        }
        else if (card?.type == 1) {
            setImg(Hearts);
            setAlt('Hearts');
        }
        else if (card?.type == 2) {
            setImg(Dimonds);
            setAlt('Dimonds');
        }
        else if (card?.type == 3) {
            setImg(Spades);
            setAlt('Spades');
        }
        else if (card?.type == 4) {
            setImg(Clubs);
            setAlt('Clubs');
        }
        else if (card?.type == 5) {
            setImg(Joker);
            setAlt('Joker');
        }
    }

    useEffect(() => {
        assign();
    }, [card]);
    /*
        return (<div className={`w-[9rem] h-[15rem] ${turn ? 'hover:animate-[rotate_500ms_ease-in-out_1]' : ''} ${useCall && 'animate-[rotateBack_350ms_ease-in-out_1]'} relative px-2 py-3 drop-shadow-md rounded-xl bg-[#eaebe6] border raunded-xl`} onClick={onClick}>
    
            <div className='absolute w-full h-full z-10 bottom-0 left-0 bg-transparent' onMouseOverCapture={turn === true ? turnUp : null} onTouchStart={turn === true ? turnUp : null} onMouseOut={turn === true ? turnUp : null}></div>
    
            <div className={`absolute bottom-0 left-0 mb-1 ms-2 text-xl font-bold`}>{title}</div>
            <div className={`my-[12%] ${suit === Turned? '':'border-2 border-black/10 bg-white py-[22%] rounded-lg'}`}>
                <img className={`w-[full] h-auto rounded-md`} src={suit} alt={alt} />
            </div>
            <div className={`absolute top-0 right-0 mt-1 me-2 text-xl font-bold`}>{title}</div>
    
        </div>);*/

    //const title = 'Non', alt = 'empty', suit = '';

    return (<div className='w h flex b bg font max-w-100 max-h-100 w-11 w-unit-rem
    h-17 h-unit-rem flex-d-c p-x-4 p-y-3 bg-c-light bg-c-op-no box-sh-lg-o-1 font-w-7 font-s-25'>

        <div className='h h-2'>{useTitle}</div>
        <div className='w h w-100 w-unit-per align-c-c'><img className='w w-100 w-unit-per' src={useImg} alt={useAlt} /></div>
        <div className='h h-2 text text-a-r'>{useTitle}</div>

    </div>);
}
