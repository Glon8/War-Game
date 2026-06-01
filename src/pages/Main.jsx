import { useNavigate } from 'react-router-dom'

import Wrap from '../components/Wrap';
import BackBoard from '../components/BackBoard';
import Title from '../components/Title';
import Button from '../components/Button';
import InitialsTag from '../components/InitialsTag';

export default function Main() {
    const navigate = useNavigate();

    const toBoard = () => { navigate('/game-board') }
    const toScore = () => { navigate('/score') }

    return (<Wrap>

        <BackBoard cust={'p-y-5 p-unit-per'}>

            <Title value={'War-Game'} />
            <div className=' w-100 w-unit-per h-20 h-unit-per flex flex-d-c align-i-c m-t-10 m-unit-per gap-25'>
                <Button b={true} value={'Start The Game'} onClick={toBoard} />
                <Button b={true} value={'Scores'} onClick={toScore} />
            </div>

        </BackBoard>
        <InitialsTag cust={'text-d-und text-d-s-solid text-d-t-1'} />
        <InitialsTag cust={'m-t-0'} value={'War-Game'} />

    </Wrap>);
}

