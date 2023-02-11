import React from 'react';

const NavBar = () => {
  return (
    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Contact Us</a></li>
        </ul>
        <button type="button" class="cancelbtn">Sign In</button>
        <input type="text" placeholder="Search.."/>
        
    </nav>
  );
}

export default NavBar;