import React from 'react'
import './style.css'

function Button({text,outline,onclick}) {
  return (
    <div className={outline?"outline_btn":"btn"} onclick={onclick}>{text}</div>
  )
}

export default Button