import '../..//App.css';
import React from 'react';
import '../../botonLindo.css';
import background from "../Imagenes/fondoLogin.png";
import logoPNG from "../Imagenes/logoPNG.png";
import axios from 'axios';
import {  Link, useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from "react";
import { MyContext } from "../../MyContext";
import { useContext } from 'react';
import swal from 'sweetalert';

const SacarTurno = () => {
  const [estudios, setEstudios] = useState([]);
  const [especialidades, setEspecialidades] = useState([]);
  const [sede, setSede] = useState([]);
  const [estud, setEstud] = useState(0);
  const [idSede, setIdSede] = useState(0);
  const [idEst, setidEst] = useState(0);
  const [idEsp, setidEsp] = useState(0);
  const navigate = useNavigate();
  const { id, setId } = useContext(MyContext);



  const getEstudios = (id) => {
    setidEsp(id)
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
    const formElement = e.target; 
    //const formulario = new FormData(formElement);
    const turno = {
      FkEstudio: estud,
      FkSede: idSede,
      Cancelado: false,
      Asistio: false,
      FkPaciente: id,
      FkMedico: 2,
      FkServicio: 1,
      Hora: formElement.Hora.value,
      Fecha: formElement.Fecha.value
    }
    axios.post("http://localhost:5000/turno/sacarturno", turno)
      .then(function (response) {
        swal("Bien!", "Se ha creado tu turno", "success");
      });
  };
  
  const onVolver = (e) => {
    e.preventDefault();
    navigate("/agenda");
  }

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
                              <option value={e.IdEstudio}>
                                {e.Estudio}
                              </option>
                            );
                          
                          })}
                    </Form.Select>
                    

                    <Form.Select onChange={(e) => setIdSede(e.target.value)}>
                    <option>Seleccione la sede...</option>
                      {sede.map((e) => {
                            return(
                              <option value={e.IdSede}>
                                {e.Sede}
                              </option>
                            );
                          
                          })}
                    </Form.Select>

                    
                    <Form.Text className="text-muted">
                      Elige la fecha en la que quieres sacar el turno:
                    </Form.Text>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control type="date" controlId="Fecha" name="Fecha" placeholder="Enter date" />
                    </Form.Group>

                      Elige la hora en la que quieres sacar el turno:
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control controlId="Hora" type="time" name="Hora"/>
                    </Form.Group>

                    </div>
                    <br></br>                    
                  <button type="submit" className="botonLog" > Sacar </button> 
                  </center>
                  </form>

                  <button className="botonLog"  onClick={onVolver}> Volver a mi agenda </button> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
export default SacarTurno;