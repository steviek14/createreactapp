//Explanation: 
/*
React needs to be imported on every file for a create-react-app project 
Components only need to be imported in App.jsx
The imports below include react, my App.css file in the components folder, my loginForm.js component and my navbar.js component
They all need to be declared in App.js because of this flow: declared in App.js -> goes to index.js which renders everything to the <div id="roo">
 -> index.js is linked to index.html -> is displayed on the browser 
Think of it as a pyramid:
Index.html are at the top, then index.js, then app.js and at the bottom is all of the components that bring everything to life 
*/

import React from 'react';
import './App.css';
import LoginForm from './loginForm';
import NavBar from './navbar';

//This is all that needs to be written here because the components are imported - they have all the functionality and styling they just need to be declared here 
function App() {
  return(
    <div>
      <NavBar />
      <LoginForm />
    </div>
    
  )
}
export default App;
