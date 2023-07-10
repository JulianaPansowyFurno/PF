import React, { useState, useEffect } from 'react';
import LoginFront from "./components/LoginFront.js";
import RegistroFront from "./components/RegistroFront.js";
import Layout from './components/Layout.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";

const App = () => {

  return(
    <div className="App">
          <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<LoginFront />} />
          <Route path="Registro" element={<RegistroFront/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    
    </div>

  )
};

export  default App;
