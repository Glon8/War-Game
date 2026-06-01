import React from 'react'

function BackBoard({ children, minW, minH, r, b, bg, p, sh, cust }) {
    return (<div className={`${minW ?? 'min-w-65'} 
        ${minH ?? 'min-h-25 min-h-unit-rem'}
        ${p ?? 'p-x-5 p-t-2 p-unit-per'} 
        flex flex-d-c 
        align-i-c 
        ${b ?? 'b-r-10'} 
        ${bg ?? 'bg bg-c-light bg-c-op-lg'} 
        ${sh ?? 'box-sh-md-o-3'}
        ${cust ?? ''}`}>{children}</div>)
}

export default BackBoard