import React from 'react'

function Subtitle({ children: text, className = '', style={}, ...props }) {
    return (
        <>
            {
                text &&
                <h1 className={`subtitle ${className}`} style={{...style}} {...props}>
                    {text}
                </h1>
            }
        </>
    )
}

export default Subtitle