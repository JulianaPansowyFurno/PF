import '../App.css';
import React from 'react';
import background from "./Imagenes/fondoLogin.png";
import logoPNG from "./Imagenes/logoPNG.png";
import {  Link } from "react-router-dom";
import '../botonLindo.css';



const Login = ({navigation}) => {

  const tomarValores = (e) => {
    e.preventDefault();
    const formulario = new FormData(e.target)
    console.log(formulario.get('usuario'))
    console.log(formulario.get('password'))
    const usuario={
      user: formulario.get('usuario'),
      pass: formulario.get('password')
    }
    console.log(usuario);
  };


  return(
    <div className="fondo" style={{ backgroundImage:`url(${background})` }}>
      <div className='conteiner' >
        <div id='formSize'>
          <div className="one-half column">
            <div id='Form' >
              <div className='fondoBlanco'id='bordesRedondos'>
                <form onSubmit= {tomarValores}>
                  <br></br>
                  <center>
                  <img src = {logoPNG} width='80%' ></img>
                  <br></br>
                  <br></br>
                    <div className="omrs-input-group">
                      <label className="omrs-input-filled">
                        {/* <span class="omrs-input-helper">Helper Text</span> */}
                        <input className="u-full-width" type="text" name="usuario" required></input>
                        <span className="omrs-input-label">Ingrese el usuario</span>
                      </label>
			              </div>
                  <br></br>
                  <div className="omrs-input-group">
                      <label className="omrs-input-filled">
                        {/* <span class="omrs-input-helper">Helper Text</span> */}
                        <input className="u-full-width" type="password" name="password" required></input>
                        <span className="omrs-input-label">Ingrese la contraseña</span>
                      </label>
			              </div>
                  <br></br>
                  {/* <button type="submit" className="btn btn-primary btn-sm" id="Boton1" >Entrar</button> */}
                  {/* <button  type="Registro" className="btn btn-primary btn-sm" id="Boton2"> Registrarse</button> */}
                  <div id="Boton1">
                  <b><Link to='/agenda' className='letrasBotonIngreso'> Entrar</Link></b>
                  </div>
                  <div id="Boton2">
                  <b><Link to='/registro' className='letrasBotonIngreso'> Registrarse</Link></b>
                  </div>
                  <h5><a href='pag para cambiar contrasena'><u>Olvide mi contraseña</u></a>   </h5>
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


export default Login;