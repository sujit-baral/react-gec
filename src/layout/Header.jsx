import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <Link to={"/"}>Home</Link>  
        <Link to={"/about"}>About</Link>  
        <Link to={"/contact"}>Contact</Link> 
        <Link to={"/mypath"}>Navigate</Link>
        <Link to={"/mycontext"}>My Context</Link>
        <Link to={"/callback"}>Callback</Link>
        <Link to={"/map"}>Data Map</Link>
        <Link to={"/form"}>FormHandling</Link>
        <Link to={"/api"}>API Calling</Link>
        <Link to={"/lcm"}>LCMethod</Link>
        <Link to={"/uncl"}>UnControlled</Link>
        <Link to={"/zustand"}>ZustandState</Link>
    </>
  )
}

export default Header