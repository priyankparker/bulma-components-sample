import React from 'react'
import Div from './Div'

function Button({
  className = '',
  children = null,
  ...props
}) {
  return (
    <>
    {children && 
    <button className={`button ${className}`} {...props}>
      {children}
    </button>
    
    }
    </>
  )
}

export function Buttons({
  className = '',
  children,
  ...props
}) {
  return (
    <>
    {
      children &&
      <Div className={`buttons ${className}`} {...props}>
        {children}
      </Div>
    }
    </>

  )
}

export default Button