import React from 'react'

function Content({children = null, className = '', style={}, ...props}) {
  return(
    <>
    {
      children &&
      <div className={`content ${className}`} style={{...style}} {...props}>
        {children}
      </div>
    }
    </>
  )
}

export default Content