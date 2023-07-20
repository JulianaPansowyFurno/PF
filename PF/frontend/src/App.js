import React from 'react';
import LoginFront from "./components/LoginFront.js";
import RegistroFront from "./components/RegistroFront.js";
import AgendaVirtual from "./components/AgendaVirtual.js";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom'

export default function App() {

  return(
    <Router>
    <div>
      <Routes>
        <Route exact path="/" element={<LoginFront />}/>
        <Route path="/registro" element={<RegistroFront />}/>
        <Route path="/agenda" element={<AgendaVirtual />}/>
      </Routes>

      </div>
      </Router>

  );
}

ReactDOM.render(<App/>,document.getElementById('root'));