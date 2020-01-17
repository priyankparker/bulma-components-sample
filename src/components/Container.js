import React from 'react'

function Container({ children, className = '', style = {} }) {
    return (
        <>
         {
             children &&
             <div className={`container ${className}`} style={{...style}}>
                {children}
            </div>
         }
        </>
    )
}

export default Container
