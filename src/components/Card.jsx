import { useState, useEffect } from 'react'

import CardFace from './CardFace'

// <Card card={{ power: 15, type: 5 }} stat={true} />

function Card({ card, stat, flipable = true, onClick, sh }) {
    const [useStat, setStat] = useState(stat ?? false);

    // ====================================> MUST ADD FLIPPING ANIMATION IN THE FUTURE

    const flip = () => {
        if (flipable) setStat(!useStat);
    }

    useEffect(() => {
        setStat(stat);
    }, [stat]);

    return (<div className={`w h b w-res w-10 w-unit-rem h-res h-16 h-unit-rem flex relative ${sh ?? 'box-sh-lg-o-1'}`}>

        <CardFace display={useStat} face={card} />
        <CardFace display={!useStat} />
        <div className='w h w-100 w-unit-per h-100 h-unit-per absolute t-0 l-0'
            onClick={() => { flip(); onClick != null ? onClick?.({ card, useStat }) : null; }}></div>

    </div>)
}

export default Card