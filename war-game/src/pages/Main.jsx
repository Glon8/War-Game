import React from 'react';
import { useNavigate } from 'react-router-dom'

import Card from '../components/Card';

export default function Main() {
    const navigate = useNavigate();

    const toBoard = () => { navigate('/game-board') }
    const toScore = () => { navigate('/score') }

    const jokerCard = {power: 15, type: 5, state: false};

    return (<div className='w-screen h-screen px-[10rem] py-[5rem] flex justify-center bg-emerald-600'>

        <div className='w-full h-full max-w-[40rem] px-[7rem] py-[3rem] blur-box bg-white/25 flex flex-col justify-center rounded-lg'>

            <h1 className='text-orange-50 underline decoration-black decoration-wavy underline-offset-8 decoration-4 text-[5rem] drop-shadow-md font-bold align-middle text-center'>War-Game</h1>

            <div className='mt-[10%] flex justify-between'>

                <Card card={jokerCard} customDesc={'SCORE'} turn={true} onClick={toScore} />
                <Card card={jokerCard} customDesc={'PLAY'} turn={true} onClick={toBoard} />

            </div>

        </div>

    </div>);

    //<Button value={'Start The Game'} onClick={toBoard} />
    //<Button value={'Score'} onClick={toScore} />

}

