import { useNavigate } from 'react-router-dom'

import Card from '../components/Card';

export default function Main() {
    const navigate = useNavigate();

    const toBoard = () => { navigate('/game-board') }
    const toScore = () => { navigate('/score') }

    const jokerCard = { power: 15, type: 5, state: false };

    return (<div className='w h bg justify-i-c align-c-c bg-c-green'>

        <div className='w h b bg
        max-w-75 max-h-70
        p-x-5 p-y-9 
        p-unit-per
        flex flex-d-c 
        align-i-c 
        b-r-10 
        bg-c-light bg-c-op-lg 
        box-sh-md-o-3'>

            <h1 className='text font c-red text-a-c text-d-und text-d-s-wavy text-d-c-red text-d-t-5 font-s-4 font-w-7 font-s-unit-rem'>War-Game</h1>
            <div className='w w-100 w-unit-per m-t-10 m-unit-per grid grid-t-c-2-12 grid-t-c-unit-rem justify-c-b'>
                {/*
                <Card card={jokerCard} customDesc={'SCORE'} turn={true} onClick={toScore} />
                <Card card={jokerCard} customDesc={'PLAY'} turn={true} onClick={toBoard} />
                */
                }
                <Card card={{ power: 15, type: 5 }} />
                <Card card={{ power: 15, type: 5 }} state={true} />

            </div>

        </div>

    </div>);

    //<Button value={'Start The Game'} onClick={toBoard} />
    //<Button value={'Score'} onClick={toScore} />

}

