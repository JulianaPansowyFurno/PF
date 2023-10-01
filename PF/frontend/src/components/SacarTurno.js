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
  const [estudios, setEstudios] = useState([]);
  const [especialidades, setEspecialidades] = useState([]);
  const navigate = useNavigate();

  const getEstudios = (id) => {
    axios
      .get("http://localhost:5000/turno/especialidad/" + id)
      .then((response) => {
        setEstudios(response.data);
        console.log(response);
      })
      .catch((error) => alert("mallllll"));
  };

  const traerEspecialidades = () => {
    axios
      .get("http://localhost:5000/especialidad")
      .then((response) => {
        setEspecialidades(response.data);
      })
      .catch((error) => alert("aca hay algo raro"));
  };
  
  useEffect(() => {
    traerEspecialidades()
  }, []);


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
                    
                    <Form.Select onChange={(e) => getEstudios(e.target.value)}>
                      <option>Seleccionar Especialidad...</option>
                        {especialidades.map((e) => {
                            return(
                              <option value={e.IdEspecialidad}>
                                {e.Especialidad}
                              </option>
                            );
                          })}
                    </Form.Select>

                      
                    <Form.Select>
                      <option>Seleccione el estudio...</option>
                        {estudios.map((e) => {
                            return(
                              <option>
                                {e.Estudio}
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