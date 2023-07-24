import '../App.css';
import React from 'react';
import '../botonLindo.css';
import background from "./Imagenes/fondoLogin.png";
import logoPNG from "./Imagenes/logoPNG.png";
import axios from 'axios';
import {  Link } from "react-router-dom";


const Registro = ({ MeLlevoValores }) => {

  const tomarValores = (e) => {
    e.preventDefault();
    const formulario = new FormData(e.target)  
    const usuario={
      user: formulario.get('usuario'),
      pass: formulario.get('password'),
      user: formulario.get('Usuarios'),
      pass: formulario.get('Contraseña'),
      nameandsur: formulario.get('NombreApellido'),
      DNI: formulario.get('DNI'),
      medicalcover: formulario.get('CoberturaMedica'),
      email: formulario.get('Mail'),
      cel: formulario.get('Telefono'),
      birth: formulario.get('FechaNacimiento')
    }
    console.log(usuario);
    MeLlevoValores(usuario);
    axios.post('http://localhost:5000/usuario', usuario)
    .then(function (response) {
      console.log(response);
    }) 
  };

  return(
    <div className="fondo" style={{ backgroundImage:`url(${background})` }}>
        <div className='conteiner' >
        <div id='formSize'>
            <div id='Form2' >
              <div className='fondoBlanco'id='bordesRedondos'>
                <form>
                    <br></br>
                    <br></br>
                    <center>
                    <img src = {logoPNG} width='50%' ></img>
                    
                    <div className="omrs-input-group">
                      <label className="omrs-input-filled">
                        <input className="u-full-width" type="text" name="NombreApellido" required></input>
                        <span className="omrs-input-label">Nombre/s y Apellido/s</span>
                      </label>
			              </div>
                  
                    <br></br>
                    <div id='colorLetrasLogin' className="mb-3">
                    <div className="omrs-input-group">
                    <label className="omrs-input-filled">
                      <input className="u-full-width" type="int" name="DNI" required></input>
                      <span className="omrs-input-label">DNI</span>
                      {/* <span class="omrs-input-helper">Helper Text</span> */}
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

                    <br></br>
                    <div className="omrs-input-group">
                    <label className="omrs-input-filled">
                      <input className="u-full-width" type="date" name="FechaNacimiento" required></input>
                      <span className="omrs-input-label">Fecha Nacimiento</span>
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
                      <input className="u-full-width" type="password" name="Contraseña" required></input>
                      <span className="omrs-input-label">Contraseña</span>
                    </label>
			              </div>
                    </div>

                    <br></br>
                        
                        
                          <div id="Boton1">
                          <Link type="submit" to='/agenda' state={tomarValores}> Entrar</Link>
                          {/* <button  type="Registro" className="btn btn-primary btn-sm" id="Boton2" >Registrarse</button> */}
                          </div>

                          <div id="Boton2">
                          <Link type="registro" to='/'> Volver </Link>
                          {/* <button type="submit" className="btn btn-primary btn-sm" id="Boton1" >Entrar</button> */}
                          </div>

                        <h5><a href='pag para cambiar contrasena'><u>Olvide mi contraseña</u></a>   </h5> 
                    </center>
                </form>
              </div>
            </div>
            </div>
          </div>
          </div>
  )
};
export default Registro;