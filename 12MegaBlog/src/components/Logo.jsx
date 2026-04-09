import React from 'react'
import logo from "../assets/circle_logo.png"

function Logo({width="100px"}) {
  return (
    <div>
      <img style={{width: width}} src={logo} alt="LOGO" />
    </div>
  )
}

export default Logo