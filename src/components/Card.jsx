import { useState, useEffect } from 'react'

import CardFace from './CardFace'

// <Card card={{ power: 15, type: 5 }} stat={true} />

function Card({ card, stat, onClick }) {
    const [useStat, setStat] = useState(stat ?? false);

    // ====================================> MUST ADD FLIPPING ANIMATION IN THE FUTURE

    const flip = () => {
        setStat(!useStat);
    }

    useEffect(() => {
        setStat(stat);
    }, [stat]);

    return (<div className='w h max-w-100 max-h-100 w-10 w-unit-rem h-16 h-unit-rem relative flex p-x-4 p-y-3'>

        <CardFace display={useStat} face={card} />
        <CardFace display={!useStat} />
        <div className='w h w-100 w-unit-per h-100 h-unit-per absolute t-0 l-0'
            onClick={() => { flip(); onClick != null ? onClick?.({ face, useStat }) : null; }}></div>

    </div>)
}

export default Card