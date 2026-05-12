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

        <BackBoard>

            <Title value={'War-Game'} />
            <div className='w h flex w-100 w-unit-per h-50 h-unit-per m-unit-per d-column align-i-c m-t-10 gap-25'>
                <Button b={true} value={'Start The Game'} onClick={toBoard} />
                <Button b={true} value={'Scores'} onClick={toScore} />
            </div>

        </BackBoard>
        <InitialsTag />

    </Wrap>);
}

