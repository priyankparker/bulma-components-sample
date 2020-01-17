import React from 'react'

function Byline({children = false, newLine = true, className = '', ...props}){
    return(
        children && (
        <>
          {newLine && <br />}
          <span className={className} style={{
            fontSize: '0.7rem'
          }} {...props}>{children}</span>
        </>
      ))
}

export default Byline