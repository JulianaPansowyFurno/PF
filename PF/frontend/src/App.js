import React, { useState } from 'react';
import Login from './components/LoginFront'
import Loginn from '.../backend/service/Login.js';

//import UsuarioService from '../../backend/src/servicios/UsuarioService';

const App = () => {
    const [data, setData] = React.useState(null);
    
    const sacoDatosDeLogin = (props) => {
        console.log(props);
    };
   

   React.useEffect(() => {
     fetch("/backend")
       .then((res) => res.json())
       .then((data) => setData(data.message));
   }, []);


  return(
    <Login MeLlevoValores = {sacoDatosDeLogin}/>
    
  )

};


export default App;