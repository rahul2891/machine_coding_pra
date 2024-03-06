import React from 'react'
import SelectBox from './SelectBox'

const Navbar = () => {
  return (
    <div className="flex justify-around">
    <nav className="px-20 m-2 w-[600px] text-lg flex justify-between">
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/login">Login</a>
    <a href="/team">Team</a>
    <a href="/accordion">Accordion</a>
  </nav>
    <SelectBox />

    </div>
    
  )
}

export default Navbar