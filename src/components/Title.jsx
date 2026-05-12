import React from 'react'

function Title({ value, text, font, c, cust }) {
    return (<h1 className={`text font 
    ${c ?? 'c-dark c-op-sm c-sh-dark'} 
    ${text ?? 'text-a-c text-d-und text-d-s-wavy text-d-t-5'} 
    ${font ?? 'font-s-4 font-w-7 font-s-unit-rem'}
    ${cust ?? ''}`}>{value ?? 'Title'}</h1>)
}

export default Title