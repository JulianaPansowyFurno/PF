import '../App.css';
import background from "./Imagenes/fondoLogin.png";
import logoPNG from "./Imagenes/logoPNG.png";
import {  Link, useNavigate } from "react-router-dom";
import '../botonLindo.css';
import axios from 'axios';
import React, { useState } from "react";
import swal from 'sweetalert';
import AgendaVirtual from './AgendaVirtual';
import { MyContext } from "../MyContext";
import {useContext} from 'react';

const Login = () => {
  const navigate = useNavigate();
  const {id, setId}=useContext(MyContext);

  const tomarValores = (e) => {
    e.preventDefault();
    const formulario = new FormData(e.target)
    const usuar={
      user: formulario.get('usuario'),
      pass: formulario.get('password')
    }
    axios.get('http://localhost:5000/usuario', {params: usuar})
    .then(function (response) {
      
      if(response.data == false){
        swal("Oops!", "Usuario o contraseña incorrecta", "error");
        //alert("Usuario o contraseña incorrecta")
      }
      else
      {
        const idPaciente = response.data[0].IdPaciente;
        setId(idPaciente)
        console.log(idPaciente)
        navigate("/agenda");
      }
    }) 
    .catch(function (error) {
      console.log(error.config);
  });  
  };

  const onRegistro = (e) => {
    e.preventDefault();
    navigate("/registro");
  }


  return(
      <div className='bodyEstatico'>
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
                  {/* <div id="Boton2"> */}
                  {/* <div className='letrasBotonIngreso'> */}
                  
                  {/* </div> */}
                  {/* </div> */}

                  {/* <div id="Boton2"> */}
                  {/* <div className='letrasBotonIngreso'> */}
                  <button type="submit" className="botonLog">
                    Entrar
                  </button>
                  <div className='espacioEntreBotones'>
                  </div>
                  <button type="registro" className="botonreg" onClick={onRegistro}>
                    Registrarse
                  </button>
                  
                  {/* </div> */}
                  {/* </div> */}


                  {/* <h5><a href='pag para cambiar contrasena'><u>Olvide mi contraseña</u></a>   </h5> */}
                  </center>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
};


export default Login;