import React from 'react';
import LoginFront from "./components/LoginFront.js";
import RegistroFront from "./components/RegistroFront.js";
import AgendaVirtual from "./components/AgendaVirtual.js";
import SacarTurno from "./components/SacarTurno.js";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom'
import {useState} from 'react';
import { MyContext } from './MyContext.js';
import AdmAgenda from "./components/AdmAgenda"

export default function App() {
  const [id, setId] = useState(0);
  return(
    <MyContext.Provider value={{id,setId}}>
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginFront />}/>
         <Route path="/registro" element={<RegistroFront />} /> 
        <Route path="/agenda" element={<AgendaVirtual />}/>
        <Route path="/sacarTurno" element={<SacarTurno />}/>
        <Route path="/administradoresAgenda" element={<AdmAgenda />}/>
      </Routes>
      </Router>
      </MyContext.Provider>
  );
}

ReactDOM.render(<App/>,document.getElementById('root'));