import '../App.css';
import React from 'react';
import '../botonLindo.css';
import background from "./Imagenes/fondoLogin.png";
import logoPNG from "./Imagenes/logoPNG.png";
import axios from 'axios';
import {  Link, useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from "react";


const SacarTurno = () => {
  const [TodosEstudios, SetEstudios] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    traerEstudios();
  }, []);

  const traerEstudios = () => {
    axios
      .get("http://localhost:5000/turno")
      .then((response) => {
        SetEstudios(response.data);
        console.log(response.data);
      })
      .catch((error) => alert("mallllll"));
  };



  return(
    <div className="fondo" style={{ backgroundImage:`url(${background})` }}>
        <div className='conteiner' >
        <div id='formSize'>
            <div id='Form2' >
              <div className='fondoBlanco'id='bordesRedondos'>
                <form>
                    <br></br>
                    <br></br>
                    <center>
                    <img src = {logoPNG} width='50%' ></img>
                    
                    <Form.Select>
                        {TodosEstudios.map((e) => {
                            return(
                              <option>
                          <div key={e.IdEstudio} >
                            {e.Estudio}
                            </div>
                            </option>
                            );
                            
                          })}

                    </Form.Select>
                          
                    
                    <br></br>

                    {/* BOTONES PARA LA PROXIMA PAGINA*/}
                  <div id="BotonReg">
                  <div className='letrasBotonIngreso'>
                  <b><button type="submit" className="btn btn-primary btn-sm" id="BotonReg" > Sacar </button></b>
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
export default SacarTurno;