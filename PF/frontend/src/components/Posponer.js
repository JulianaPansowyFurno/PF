import '../App.css';
import React from 'react';
import '../botonLindo.css';
import background from "./Imagenes/fondoLogin.png";
import logoPNG from "./Imagenes/logoPNG.png";
import axios from 'axios';
import {  Link, useNavigate } from "react-router-dom";

const Registro = () => {
  const navigate = useNavigate();

  const tomarValores = (e) => {
    e.preventDefault();
    const formElement = e.target; // Reference to the form element
    const formulario = new FormData(formElement); 
    const fecha={
      Fecha: formulario.get('Fecha')
    }
    axios.post('http://localhost:5000/usuario', fecha)
    .then(function (response) {
      console.log(response);
      navigate("/agenda");

    })
  }; 

  const onVolver = (e) => {
    e.preventDefault();
    navigate("/");
  }

  return(
    <div className="fondo" style={{ backgroundImage:`url(${background})` }}>
        <div className='conteiner' >
        <div id='formSize'>
            <div id='Form2' >
              <div className='fondoBlanco'id='bordesRedondos'>
                <form onSubmit={tomarValores}>
                    <br></br>
                    <br></br>
                    <center>
                    <img src = {logoPNG} width='50%' ></img>
                    
                
                    <br></br>
                    <div className="omrs-input-group">
                    <label className="omrs-input-filled">
                      <input className="u-full-width" type="date" name="Fecha" required></input>
                      <span className="omrs-input-label">Fecha a la que desea pasar el turno: </span>
                    </label>
			        </div>

                    {/* BOTONES PARA LA PROXIMA PAGINA*/}
                  <div id="BotonReg">
                  <div className='letrasBotonIngreso'>
                  <b><button type="submit" className="btn btn-primary btn-sm" id="BotonReg" >Registrarse</button></b>
                  </div>
                  </div>


                  </center>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
export default Registro;