import React from 'react';
import LoginFront from "./components/Paciente/LoginFront.js";
import RegistroFront from "./components/Paciente/RegistroFront.js";
import AgendaVirtual from "./components/Paciente/AgendaVirtual.js";
import SacarTurno from "./components/Paciente/SacarTurno.js";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom'
import {useState} from 'react';
import { MyContext } from './MyContext.js';
import AdmAgenda from "./components/Medico/AdmAgenda"
import AgregarMedico from './components/Medico/AgregarMedico.js';

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
        <Route path="/agregarMedico" element={<AgregarMedico />}/>
      </Routes>
      </Router>
      </MyContext.Provider>
  );
}

ReactDOM.render(<App/>,document.getElementById('root'));