import React from 'react';
import  './NavBar.css';

export const NavBar = () => {
  return (
    <>
    <nav>
        <label  className="logo">Mjengo Smart</label>
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact Us</a></li>
            <li><a href="signup">Register</a></li>
            <li><a href="/login">Login</a></li>

        </ul>
    </nav>
    </>
  )
}
