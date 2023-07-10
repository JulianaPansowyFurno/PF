import '../App.css';
import React from 'react';
import background from "./Imagenes/fondoLogin.png";
import logoPNG from "./Imagenes/logoPNG.png";
import Registro from "./RegistroFront.js"
//import { useNavigate } from 'react-router-dom';



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
                  <br></br>
                  <img src = {logoPNG} width='72%' ></img>
                  <div id='colorLetrasLogin' className="mb-3">
                    <h3><b>Ingrese el usuario</b></h3>
                    <input className="u-full-width" type="text" name="usuario"  placeholder="Usuario"/>
                  </div>
                  <br></br>
                  <div id='colorLetrasLogin' className="mb-3">
                    <h3><b>Ingrese la contraseña</b></h3>
                    <input type="password" name="password" className="u-full-width" placeholder="Contraseña"/>
                  </div>
                  <br></br>
                  <br></br>
                  <button type="submit" className="btn btn-primary btn-sm" id="Boton1" >Entrar</button>
                  <button  type="Registro" className="btn btn-primary btn-sm" id="Boton2" onPress={() => navigation.navigate(<Registro/>)}> Registrarse</button>
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


export default Login;