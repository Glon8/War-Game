import React from 'react'

function BackBoard({ children, w, h, r, bg, p, sh, cust }) {
    return (<div className={`w h b bg flex
        ${w ?? 'max-w-35 max-w-unit-rem'} 
        ${h ?? 'max-h-70'}
        ${p ?? 'p-x-5 p-t-7 p-unit-per'} 
        flex-d-c 
        align-i-c 
        ${r ?? 'b-r-10'} 
        ${bg ?? 'bg-c-light bg-c-op-lg'} 
        ${sh ?? 'box-sh-md-o-3'}
        ${cust ?? ''}`}>{children}</div>)
}

export default BackBoard