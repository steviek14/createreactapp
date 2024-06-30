

//imported react and css file for styling 
import React from 'react';
import './App.css';

//created LoginForm using JSX 
export default function loginForm(){
    return(
        <body>
             <div className='form-container'>
            <h3>Login</h3> 
            <div className='form-group'>
                <label for='username'>Username:</label>
                <input type='text'name='username'></input>
            </div>
            <div className='form-group'>
                <label for='password'>Password:</label>
                <input type='text'name='password'></input>
            </div>
            <div className='form-group'>
                <button className='submit'>Submit</button>
            </div>
        </div>
        </body>
       
    )
}