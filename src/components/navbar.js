//imported react and css file for styling

import React from 'react';
import './App.css';

//navbar created using JSX 
export default function Navbar (){
    return(
       <nav className="navbar"> 
            <ul>
                <li>Home</li>
                <li>Contact</li>
                <li>Login</li>
            </ul>
       </nav>
    );
}