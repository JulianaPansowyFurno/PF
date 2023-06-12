import React, { useState } from 'react';
import Login from './components/LoginFront';
//import LoginBack from '.../backend/src/servicios/LoginBack.js';

//import UsuarioService from '../../backend/src/servicios/UsuarioService';

const App = () => {
  const [data, setData] = React.useState(null);
    
  const sacoDatosDeLogin = (props) => {
    console.log(props);
  };

  React.useEffect(() => {
    fetch("/LoginBack")
      .then((res) => res.json())
      .then((data) => setData(data.message));
    }, 
  []);


  return(
    <Login MeLlevoValores = {sacoDatosDeLogin}/>
  )
};
export default App;