import '../../App.css';
import React from 'react';
import background from "../Imagenes/fondoLogin.png";
import logoPNG from "../Imagenes/logoPNG.png";
import axios from 'axios';
import {  Link, useNavigate } from "react-router-dom";
import "../../botonLindo.css";

const Registro = () => {
  const navigate = useNavigate();
  

  const tomarValores = (e) => {
    e.preventDefault();
    const formElement = e.target; // Reference to the form element
    const formulario = new FormData(formElement); 
    const usuario={
      user: formulario.get('Usuarios'),
      pass: formulario.get('Contrasena'),
      nameandsur: formulario.get('NombreApellido'),
      DNI: formulario.get('DNI'),
      medicalcover: formulario.get('CoberturaMedica'),
      email: formulario.get('Mail'),
      cel: formulario.get('Telefono'),
      birth: formulario.get('FechaNacimiento')
    }
    console.log(usuario);
    axios.post('http://localhost:5000/usuario', usuario)
    .then(function (response) {
      console.log(response);
      navigate("/");

    })
  }; 

  const onVolver = (e) => {
    e.preventDefault();
    navigate("/");
  }

  const Agenda = () => {
    navigate("/agenda");
  }

  return(
    <div className='bodyEstatico'>

    <div className="fondo" style={{ backgroundImage:`url(${background})` }}>
        <div className='conteiner' >
        <div id='formSize'>
            <div id='Form2' >
              <div className='fondoBlanco'id='bordesRedondos'>
                <form onSubmit={tomarValores}>
                    <br></br>
                    <br></br>
                    <center>
                    <img src = {logoPNG} width='80%' ></img>
                    
                    <div className="omrs-input-group">
                      <label className="omrs-input-filled">
                        <input className="u-full-width" type="text" name="NombreApellido" required></input>
                          <span className="omrs-input-label">Nombre/s y Apellido/s</span>
                      </label>
			              </div>
                  
                    <div className="omrs-input-group">
                    <label className="omrs-input-filled">
                      <input className="u-full-width" type="int" name="DNI" required></input>
                      <span className="omrs-input-label">DNI</span>
                    </label>
			              </div>

                    <div className="omrs-input-group">
                    <label className="omrs-input-filled">
                      <input className="u-full-width" type="text" name="CoberturaMedica" required></input>
                      <span className="omrs-input-label">Cobertura medica</span>
                    </label>
			              </div>

                    <div className="omrs-input-group">
                    <label className="omrs-input-filled">
                      <input className="u-full-width" type="email" name="Mail" required></input>
                      <span className="omrs-input-label">Mail</span>
                    </label>
			              </div>

                    <div className="omrs-input-group">
                    <label className="omrs-input-filled">
                      <input className="u-full-width" type="int" name="Telefono" required></input>
                      <span className="omrs-input-label">Telefono</span>
                    </label>
                    </div>

                    <div className="omrs-input-group">
                    <label className="omrs-input-filled" id='marginFecha'>
                      <input className="u-full-width" type="date" name="FechaNacimiento" required></input>
                      <span className="omrs-input-label" id='textoFecha'>Fecha Nacimiento</span>
                    </label>
			              </div>

                    <div className="omrs-input-group">
                    <label className="omrs-input-filled">
                      <input className="u-full-width" type="text" name="Usuarios" required></input>
                      <span className="omrs-input-label">Usuario</span>
                    </label>
			              </div>

                    <div className="omrs-input-group">
                    <label className="omrs-input-filled">
                      <input className="u-full-width" type="password" name="Contrasena" required></input>
                      <span className="omrs-input-label">Contraseña</span>
                    </label>
			              </div>
                    <br></br>
                    <button type="submit" className="botonreg" onClick={Agenda}> Registrarse </button>
                  <div className='espacioEntreBotones'>
                  </div>
                  <button type="registro" className="botonVolver" onClick={onVolver}> Volver </button>
                    
                  <div>
                  </div>
                  
                  </center>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
};
export default Registro;