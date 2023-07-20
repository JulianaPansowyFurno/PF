import '../App.css';
import React from 'react';
import background from "./Imagenes/fondoLogin.png";
import axios from 'axios';



const Login = ({navigation}) => {

    axios.post('http://localhost:5000/turno')
    .then(function (response) {
      console.log(response);
    }) 


  return(
    <div className="fondo" style={{ backgroundImage:`url(${background})` }}>
      <h3>Agenda Vistual</h3>
    </div>
  )
};


export default Login;