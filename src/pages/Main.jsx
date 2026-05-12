import { useNavigate } from 'react-router-dom'

import Card from '../components/Card';
import Button from '../components/Button';

export default function Main() {
    const navigate = useNavigate();

    const toBoard = () => { navigate('/game-board') }
    const toScore = () => { navigate('/score') }

    return (<div className='w h bg flex justify-i-c align-c-c bg-c-green flex-d-c justify-c-c align-i-c'>

        <div className='w h b bg
        max-w-35 max-w-unit-rem 
        max-h-70
        p-x-5 p-t-7 
        p-unit-per
        flex flex-d-c 
        align-i-c 
        b-r-10 
        bg-c-light bg-c-op-lg 
        box-sh-md-o-3'>

            <h1 className='text font c-dark c-op-sm c-sh-dark text-a-c text-d-und text-d-s-wavy text-d-t-5 font-s-4 font-w-7 font-s-unit-rem'>War-Game</h1>
            <div className='w h flex w-100 w-unit-per h-50 h-unit-per m-unit-per d-column align-i-c m-t-10 gap-25'>
                <Button b={true} value={'Start The Game'} onClick={toBoard} />
                <Button b={true} value={'Score'} onClick={toScore} />
            </div>

        </div>

        <p className='font font-w-5 font-st-it'>Mady by Glon8 | Demon_ruz</p>

    </div>);
}

