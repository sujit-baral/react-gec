import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <Link to={"/"}>Home</Link>  
        <Link to={"/about"}>About</Link>  
        <Link to={"/contact"}>Contact</Link> 
        <Link to={"/mypath"}>My Component</Link>
        <Link to={"/mycontext"}>My Context</Link>
    </>
  )
}

export default Header