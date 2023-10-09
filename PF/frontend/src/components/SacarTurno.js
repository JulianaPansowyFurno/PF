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
  const [sede, setSede] = useState([]);
  const [estud, setEstud] = useState();
  const [se, setSe] = useState();
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
  }

  const traerSede = () => {
    axios
      .get("http://localhost:5000/sede")
      .then((response) => {
        setSede(response.data);
      })
      .catch((error) => alert("aca hay algo raro"));
  };

  const Valores = (e) => {
    e.preventDefault();
    const formElement = e.target; // Reference to the form element
    const formulario = new FormData(formElement);
    console.log(formulario.get('Estudio'))
    const turno = {
      Estudio: formulario.get('Estudio'),
      Hora: formulario.get('Hora'),
      Fecha: formulario.get('Fecha')
    }
    axios.put("http://localhost:5000/turno/sacarturno", turno)
      .then(function (response) {
        console.log(response)
      });
  };
  
  useEffect(() => {
    traerEspecialidades()
    traerSede()
  }, []);


  return(
    <div className="fondo" style={{ backgroundImage:`url(${background})` }}>
        <div className='conteiner' >
        <div id='formSize'>
            <div id='Form2' >
              <div className='fondoBlanco'id='bordesRedondos'>
              <form onSubmit={Valores}>
                    <br></br>
                    <br></br>
                    <center>
                    <div className='form'>
                    <Form.Select onChange={(e) => getEstudios(e.target.value)}>
                      <option>Seleccionar especialidad...</option>
                        {especialidades.map((e) => {
                            return(
                              <option value={e.IdEspecialidad}>
                                {e.Especialidad}
                              </option>
                            );
                          })}
                    </Form.Select>

                      
                    <Form.Select onChange={(e) => setEstud(e.target.value)}>
                      <option>Seleccione el estudio...</option>
                        {estudios.map((e) => {
                            return(
                              <option>
                                {e.Estudio}
                              </option>
                            );
                          
                          })}
                    </Form.Select>
                    

                    <Form.Select onChange={(e) => setSe(e.target.value)}>
                    <option>Seleccione la sede...</option>
                      {sede.map((e) => {
                            return(
                              <option>
                                {e.Sede}
                              </option>
                            );
                          
                          })}
                    </Form.Select>

                    
                    <Form>
                    <Form.Text className="text-muted">
                      Elige la fecha en la que quieres sacar el turno:
                    </Form.Text>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control type="date" name="Fecha" placeholder="Enter date" />
                    </Form.Group>
                    </Form>

                    <Form>
                      Elige la hora en la que quieres sacar el turno:
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control id="appt-time" type="time" name="appt-time"/>
                    </Form.Group>
                    </Form>

                    </div>
                    <br></br>                    
                  <button type="submit" className="botonLog" > Sacar </button> 
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