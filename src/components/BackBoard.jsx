import React from 'react'

function BackBoard({ children, w, h, r, bg, p, sh, cust }) {
    return (<div className={`w h b bg flex
        max-w-35 max-w-unit-rem ${w ?? ''} 
        ${h ?? 'max-h-70'}
        p-x-5 p-t-2 p-unit-per ${p ?? ''} 
        flex-d-c 
        align-i-c 
        b-r-10 ${r ?? ''} 
        ${bg ?? 'bg-c-light bg-c-op-lg'} 
        ${sh ?? 'box-sh-md-o-3'}
        ${cust ?? ''}`}>{children}</div>)
}

export default BackBoard