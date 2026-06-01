import React from 'react'

function Button({ value, onClick, w, h, b, r, bg, sh, c, font, cusBody, cusText }) {
    // should add animation in here later on
    return (<div className={`b bg 
        ${w ?? 'w-15 w-unit-rem'} 
        ${h ?? 'h-3 h-unit-rem'} 
        ${b ?? 'b-c-dark b-w-1'} ${r ?? 'b-r-10'} 
        ${bg ?? 'bg-c-res bg-c-light bg-c-op-sm'}
        ${sh ?? 'box-sh-sm-o-2'}
        ${cusBody ?? ''}`}>
        <input type='button'
            value={value ?? 'nothing yet'}
            onClick={() => onClick?.()}
            className={`bg font
            w-100 w-unit-per
            h-100 h-unit-per
            b-w-0 ${r ?? 'b-r-10'}
            bg-c-res
            ${font ?? 'font-w-7'}
            ${c ?? 'c-dark c-op-md'}
            ${cusText ?? ''}`} />
    </div>)
}

export default Button