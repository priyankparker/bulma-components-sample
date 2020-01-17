import React from 'react'

function Divider({ className, vertical = false, content = false, style, ...props  }) {
	return (
        <div 
            className={`${vertical ? 'is-divider-vertical' : 'is-divider'} ${className}`}
            style={{...style}}
            // data-content={ content ? content : null}
            {...props}
        />
	)
}

export default Divider