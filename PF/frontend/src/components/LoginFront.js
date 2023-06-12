import '../App.css';
import React from 'react';

const Login = ({ MeLlevoValores }) => {

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
    <div className="App">
      <form onSubmit= {tomarValores}>
      <div className="mb-3">
        <label className="form-label" > Usuario </label>
        <input type="text" className="form-control" name="usuario" />
      </div>
      <div  className="mb-3">
        <label  className="form-label">Contraseña </label>
        <input type="password" className="form-control" name="password"/>
      </div>
      <button type="submit" className="btn btn-primary">Entrar</button>
    </form>
    </div>
  )
};


export default Login;
