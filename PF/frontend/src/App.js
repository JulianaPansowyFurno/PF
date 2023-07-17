import React, { useState, useEffect } from 'react';
import LoginFront from "./components/LoginFront.js";
import RegistroFront from "./components/RegistroFront.js";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';

export default function App() {

  return(
    <BrowserRouter>
    <div>
      
      
      <Routes>
        <Route path="/" element={<LoginFront />}>
          {/* <Route path="registro" element={<RegistroFront />} /> */}
        </Route>
      </Routes>
      
      </div>
      </BrowserRouter>

  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);