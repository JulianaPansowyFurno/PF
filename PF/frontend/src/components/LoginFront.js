import '../App.css';
import React from 'react';


const Login = ({ MeLlevoValores, navigation }) => {

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
    <div className='conteiner'>
    <div className="one-half column" id='formSize'>
    <div className="App" id='Form'>
      <form onSubmit= {tomarValores}>
      <div className="mb-3">
      <label><b>Ingrese el usuario</b></label>
      <input type="text" name="usuario" className="u-full-width" placeholder="Usuario"/>
      </div>
      <br></br>
      <div  className="mb-3">
      <label><b>Ingrese la contraseña</b></label>
      <input type="password" name="password" className="u-full-width" placeholder="Contraseña"/>
      </div>
      <div className="one-half row" id='formSize'></div>
      <button type="submit" className="btn btn-primary btn-sm" id="Boton1" >Entrar</button>
      <button onPress={() => navigation.navigate('RegistroFront')} type="Registro" className="btn btn-primary btn-sm" id="Boton2" >Registrarse</button>
    </form>
    </div>
    </div>
    </div>
    
  )
  
};



export default Login;
