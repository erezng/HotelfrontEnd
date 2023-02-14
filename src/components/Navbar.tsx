import React, { useContext } from 'react'
import {NavLink} from "react-router-dom";
 const Navbar = () => {
//   const {isLoggedIn}=useContext()
  return (
    <nav>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Login</NavLink>
    </nav>
    )
}

export default Navbar