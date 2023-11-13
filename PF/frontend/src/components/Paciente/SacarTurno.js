import '../..//App.css';
import React from 'react';
import '../../botonLindo.css';
import '../../index.css';
import background from "../Imagenes/fondoLogin.png";
import logoPNG from "../Imagenes/logoPNG.png";
import axios from 'axios';
import {  Link, useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from "react";
import { MyContext } from "../../MyContext";
import { useContext } from 'react';
import swal from 'sweetalert';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBBtn } from 'mdb-react-ui-kit';
import Barra from "./NavBar";


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
  const [genero, SetGenero] = useState("");
  const [Fecha, SetFecha] = useState("");
  const [medicos, setMEdicos] = useState([]);
  const [idMedico, setidMedico] = useState(0);
  const [dias, setDias] = useState([]);


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

  const getMedicos = (mascOFem) => {
    SetGenero(mascOFem)
    console.log(mascOFem)
    console.log(idEsp)
    axios.get(`http://localhost:5000/medico/EspecialidadYGenero?Genero=${mascOFem}&Especialidad=${idEsp}`)
      .then((response) => {
        setMEdicos(response.data);
        console.log(response.response);
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

  const TraerDiasLaborales = () => {
    axios
      .get(`http://localhost:5000/medico/DiasDisponibles/${idMedico}`)
      .then((response) => {
        setDias(response.data);
      })
      .catch((error) => alert("aca hay algo raro"));
  };


  const Valores = (e) => {
    e.preventDefault();
    const formElement = e.target; 
    //const formulario = new FormData(formElement);

    let diaElegido = "";
    switch (new Date(formElement.Fecha.value + " ").getDay()) {
      case 0: 
        diaElegido = "Domingo";
        break;
      case 1: 
        diaElegido = "Lunes";
        break;
      case 2: 
        diaElegido = "Martes";
        break;
      case 3: 
        diaElegido = "Miercoles";
        break;
      case 4: 
        diaElegido = "Jueves";
        break;
      case 5: 
        diaElegido = "Viernes";
        break;
      case 6: 
        diaElegido = "Sabado";
        break;
      default:
        diaElegido = "";
    }

    if (!trabajaEldia(diaElegido)) {
      alert("El medico no trabaja ese dia!!!");
    } else {
      const turno = {
        FkEstudio: estud,
        FkSede: idSede,
        Cancelado: false,
        Asistio: false,
        FkPaciente: id,
        FkMedico: idMedico,
        Especialidad: idEsp,
        Hora: formElement.Hora.value,
        Fecha: formElement.Fecha.value
      }
      axios.post("http://localhost:5000/turno/sacarturno", turno)
        .then(function (response) {
          swal("Bien!", "Se ha creado tu turno", "success");
          navigate("/agenda");
        });
    }
  };

  const DiaDisponibles = (fecha) => {
    const dia = new Date(fecha).getDay()
    
   
  };
  
  const onVolver = (e) => {
    e.preventDefault();
    navigate("/agenda");
  }

  useEffect(() => {
    traerEspecialidades()
    traerSede()
    getMedicos();
    
  }, []);

  useEffect(() => {
    TraerDiasLaborales();
  }, [idMedico]);

  const trabajaEldia = (dia) => {
    if (dias?.length) {
      return !!dias[0][dia];
    }
    
    return false;
  }

  return(
    <div className="fondo" style={{ backgroundImage:`url(${background})` }}>
        <div className='conteiner' >
            <Barra></Barra>
        <div id='formSize' >
            <div id='Form2' >
              <div className='fondoBlanco'id='bordesRedondos'>
              <form onSubmit={Valores}>
                    <br></br>
                    <br></br>

                    <div className='form'>
                    <center>
                    <img className='marginLogo' src = {logoPNG} width='100%' ></img>
                    </center>

    
                    <Form.Select className='marginLeft' onChange={(e) => getEstudios(e.target.value)} required>
                      <option>Seleccionar especialidad...</option>
                        {especialidades.map((e) => {
                            return(
                              <option value={e.IdEspecialidad}>
                                {e.Especialidad}
                              </option>
                              
                            );
                          })}
                    </Form.Select>
                    <br></br>
                      
                    <Form.Select className='marginLeft' onChange={(e) => setEstud(e.target.value)} required>
                      <option>Seleccione el estudio...</option>
                        {estudios.map((e) => {
                            return(
                              <option value={e.IdEstudio}>
                                {e.Estudio}
                              </option>
                            );
                          
                          })}
                    </Form.Select>
                    
                    <br></br>
                    <Form.Select  className='marginLeft' onChange={(e) => setIdSede(e.target.value)} required>
                    <option>Seleccione la sede...</option>
                      {sede.map((e) => {
                            return(
                              <option value={e.IdSede}>
                                {e.Sede}
                              </option>
                            );
                          
                          })}
                    </Form.Select>
                    <br></br>
{/* genero y medico */}
<Form.Select  className='marginLeft'  onChange={(e) => getMedicos(e.target.value)} required>
                <option>Seleccioná el genero  del medico...</option>              
                <option value={"F"}> Femenino</option>
                <option value={"M"}> Msculino</option>
              </Form.Select> 
                    <br></br>
                      
                    <Form.Select className='marginLeft' onChange={(e) => setidMedico(e.target.value)} required>
                      <option>Seleccione el medico...</option>
                        {medicos.map((e) => {
                            return(
                              <option value={e.IdMedico}>
                                {e.NombreApellidoM}
                              </option>
                            );
                          
                          })}
                    </Form.Select>
                 

                    <br></br>
                    <Form.Text className='letraUnPocoMasGrande' id='marginLeftt'>
                      Elige la fecha en la que quieres sacar el turno:
                    </Form.Text>
                    <center>

                    <Form.Group className="mb-3" controlId="formBasicEmail" id='marginLeftt'>
                      <Form.Control type="date" controlId="Fecha" onChange={((e) => DiaDisponibles(e.target.value))} name="Fecha" placeholder="Enter date"  required/>
                    </Form.Group>
                      <div>
                        El medico trabaja los dias
                        <div>Lunes: {trabajaEldia("Lunes") ? "Si" : "No"}</div>
                        <div>Martes: {trabajaEldia("Martes") ? "Si" : "No"}</div>
                        <div>Miercoles: {trabajaEldia("Miercoles") ? "Si" : "No"}</div>
                        <div>Jueves: {trabajaEldia("Jueves") ? "Si" : "No"}</div>
                        <div>Viernes: {trabajaEldia("Viernes") ? "Si" : "No"}</div>
                        <div>Sabado: {trabajaEldia("Sabado") ? "Si" : "No"}</div>
                        </div>
                    </center>
                    <br></br>
                    <Form.Text className='letraUnPocoMasGrande' id='marginLeftt'>
                    Elige la hora en la que quieres sacar el turno:
                    </Form.Text>
                    <center>
                    <Form.Group className="mb-3" controlId="formBasicEmail" id='marginLeftt'>
                      <Form.Control controlId="Hora" type="time" name="Hora" required/>
                    </Form.Group>
                    </center>

                    </div>
                    <br></br>     
                    <center>
               
                  <button type="submit" className="botonLog" > Sacar </button> 
                  </center>

                  </form>
                  <center>

                  <br></br>
                  <button className="botonLog"  onClick={onVolver}> Volver </button> 
                  </center>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
export default SacarTurno;