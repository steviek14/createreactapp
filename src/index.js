//This file only needs to import react, reactDOM and the App.js file 

import React from 'react'; //React imported default 
import ReactDOM from 'react-dom/client'; //ReactDOM imported default
import App from './components/App'; //App.js imported

//This is the only code necessary for this file. This is the file that is linked to the index.html. The second on our pyramid 
//this file takes everything and renders it to the html file 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

