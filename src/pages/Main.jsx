import { useNavigate } from 'react-router-dom'

import Card from '../components/Card';

export default function Main() {
    const navigate = useNavigate();

    const toBoard = () => { navigate('/game-board') }
    const toScore = () => { navigate('/score') }

    const jokerCard = { power: 15, type: 5, state: false };

    return (<div className='w-per-20 h-per-20 justify-i-c align-c-c bg-green'>

        <div className=' w-per-20 h-per-20
            max-w-14
            max-h-12
            p-x-5 p-y-9
            flex flex-c
            align-i-c
            r-4
            bg-t-5'
        >

            <h1 className='w-rem-5 text-orange-50 underline decoration-black decoration-wavy underline-offset-8 decoration-4 text-[5rem] drop-shadow-md font-bold align-middle text-center'>War-Game</h1>
            <div className='mt-[10%] flex justify-between'>
                {/*
                <Card card={jokerCard} customDesc={'SCORE'} turn={true} onClick={toScore} />
                <Card card={jokerCard} customDesc={'PLAY'} turn={true} onClick={toBoard} />
                */}

            </div>

        </div>

    </div>);

    //<Button value={'Start The Game'} onClick={toBoard} />
    //<Button value={'Score'} onClick={toScore} />

}

