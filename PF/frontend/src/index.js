import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginFront from './components/LoginFront.js';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import RegistroFront from './components/RegistroFront.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
   
    <App />
     <LoginFront />
     {/* <RegistroFront />  */}
   
     </BrowserRouter>
     </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
