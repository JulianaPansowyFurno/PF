import '../App.css';
import background from "./Imagenes/fondoLogin.png";
import logoPNG from "./Imagenes/logoPNG.png";
import {  Link } from "react-router-dom";
import '../botonLindo.css';
import axios from 'axios';
import React, { useState } from "react";

var pagina='';

const Login = () => {
  const [post, setPost] = React.useState('');
  const [user, setUser] = useState()

  const tomarValores = (e) => {
    e.preventDefault();
    const formulario = new FormData(e.target)
    const usuar={
      user: formulario.get('usuario'),
      pass: formulario.get('password')
    }
    axios.get('http://localhost:5000/usuario', usuar)
    .then(function (response) {
      if(response == false){
        pagina = '/registro';
      }
      else
      {
        pagina = '/agenda';
      }
      setUser(response.data)
      // store the user in localStorage
      localStorage.setItem('user', response.data)
      console.log(response.data)
    }) 
    .catch(function (error) {
      console.log(error.config);
  });
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
                        <input className="u-full-width" type="text" name="usuario" required></input>
                        <span className="omrs-input-label">Ingrese el usuario</span>
                      </label>
			              </div>
                  <br></br>
                  <div className="omrs-input-group">
                      <label className="omrs-input-filled">
                        <input className="u-full-width" type="password" name="password" required></input>
                        <span className="omrs-input-label">Ingrese la contraseña</span>
                      </label>
			              </div>
                  <br></br>
                  {/* <button type="submit" className="btn btn-primary btn-sm" id="Boton1" >Entrar</button>  */}
                  {/* <button  type="Registro" className="btn btn-primary btn-sm" id="Boton2"> Registrarse</button> */}

                  {/* BOTONES PARA LA PROXIMA PAGINA*/}
                  <div id="Boton1">
                  <b><Link to={pagina} className='letrasBotonIngreso' > Entrar</Link></b>
                  </div>
                  {/* {tomarValores && (
                    <Alert severity="error" onClick={() => setError(null)}>
                      {props.error || error}
                    </Alert>
                  )} */}
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