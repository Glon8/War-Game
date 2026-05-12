import React from 'react'

function InitialsTag({ value, cust }) {
    return (<p className={`font font-w-5 font-st-it ${cust ?? ''}`}>{value ?? 'Mady by Glon8 | Demon_Ruz'}</p>)
}

export default InitialsTag