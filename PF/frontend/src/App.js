import React, { useState, useEffect } from 'react';
import LoginFront from "./components/LoginFront.js";
import RegistroFront from "./components/RegistroFront.js";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ReactDOM from "react-dom";

const App = () => {

  return(
    <div>
      <Router>
      <Routes>
        <Route exact path="/" element={<LoginFront/>}>
          <Route path="/Registro" element={<RegistroFront/>} />
        </Route>
      </Routes>
      </Router>
    </div>

  );
}

ReactDOM.render(<App />, document.getElementById('root'));