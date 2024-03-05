import React from 'react'

const Navbar = () => {
  return (
    <nav className="px-20 m-2 w-[600px] text-lg flex justify-between">
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/login">Login</a>
    <a href="/team">Team</a>
    <a href="/accordion">Accordion</a>
  </nav>
  )
}

export default Navbar