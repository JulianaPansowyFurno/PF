import '../App.css';
import React from 'react';
import background from "./Imagenes/fondoLogin.png";

const Login = ({ MeLlevoValores, navigation }) => {
  const LogoFoto = ['Logo.png']

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
    MeLlevoValores(usuario); 
  };

  return(
<div className="fondo" style={{ backgroundImage:`url(${background})` }}>
    <div className='conteiner' >
      
      <div id='formSize'>
        <div className="one-half column">
          <div id='Form' >
            
            <form onSubmit= {tomarValores}>
            <div className='fondoBlanco'id='bordesRedondos'>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
                    <div className="mb-3">
                      <b>Ingrese el usuario</b>
                      <div className='fondoBlancoEspacio'>
                      <br></br>
                      </div>
                      <input type="text" name="usuario" className="u-full-width" placeholder="Usuario"/>
                    </div>
                    <br></br>
                    <div  className="mb-3">
                      <b>Ingrese la contraseña</b>
                      <div className='fondoBlancoEspacio'>
                      <br></br>
                      </div>
                      <input type="password" name="password" className="u-full-width" placeholder="Contraseña"/>
                    </div>
                    <br></br>
                      <button type="submit" className="btn btn-primary btn-sm" id="Boton1" >Entrar</button>
                      <button  type="Registro" className="btn btn-primary btn-sm" id="Boton2" >Registrarse</button>
                      
                      <div className='fondoBlancoEspacio'>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      </div>
              </div>
              
              </form>
              
              </div>
        </div>
      </div>
    </div>
    </div>
  )
};

export default Login;