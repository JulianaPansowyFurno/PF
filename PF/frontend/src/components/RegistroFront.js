import '../App.css';
import React from 'react';
import ReactDOM from "react-dom/client";
import '../registro.css';
import background from "./Imagenes/fondoLogin.png";
import logoPNG from "./Imagenes/logoPNG.png";
import axios from 'axios';

const Registro = ({ navigation }) => {
  const LogoFoto = ['Logo.png']

  const tomarValores = (e) => {
    e.preventDefault();
    const formulario = new FormData(e.target)  
    const usuario={
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
    //MeLlevoValores(usuario);
    axios.post('http://localhost:5000/usuario', usuario)
    .then(function (response) {
      console.log(response);
    }) 
  };
  return(
    <div className="fondo" style={{ backgroundImage:`url(${background})` }}>
      <div className='conteiner' >
        <div id='formSize'>
          <div className="one-half column">
            <div id='Form' >
              <div className='fondoBlanco'id='bordesRedondos'>
                <form  onSubmit= {tomarValores}>
                    <br></br>
                    <br></br>
                    <img src = {logoPNG} width='72%' ></img>
                    <center>
                    <div className="omrs-input-group">
                    <label className="omrs-input-filled">
                      <input className="u-full-width" type="text" name="NombreApellido" required></input>
                      <span className="omrs-input-label">Nombre/s y Apellido/s</span>
                    </label>
			            </div>
                  </center>
                    <br></br>
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
                    <br></br>
                    
                    <br></br>
                    <button type="submit" className="btn btn-primary btn-sm" id="Boton1" >Registrarse</button>
                    <button  type="Registro" className="btn btn-primary btn-sm" id="Boton2" >Volver</button>
                    <h5><a href='pag para cambiar contrasena'><u>Olvide mi contraseña</u></a>   </h5> 

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
