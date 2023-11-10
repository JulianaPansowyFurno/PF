import '../../App.css';
import React from 'react';
import '../../botonLindo.css';
import background from "../Imagenes/fondoLogin.png";
import axios from 'axios';
import {  Link, useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from "react";
import { MyContext } from "../../MyContext";
import { useContext } from 'react';
import swal from 'sweetalert';

const AgregarMedico = () => {
  const [estudios, setEstudios] = useState([]);
  const [especialidades, setEspecialidades] = useState([]);
  const [espElegida, setEspElegida] = useState();
  const [selectedDays, setSelectedDays] = useState({ domingo: false, lunes: false,martes: false,miercoles: false,jueves: false,viernes: false,sabado: false });
  const navigate = useNavigate();
  const [idDiasLaborales, setidDiasLaborales] = useState();
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [showPosponerModal, setShowPosponerModal] = useState(false);
  const [turnoId, setTurnoId] = useState();


  const handleCloseCancelModal = () => setShowCancelModal(false);
  const handleClosePosponerModal = () => setShowPosponerModal(false);

  const handleShowCancelModal = (idTurno) => {
    setTurnoId(idTurno);
    setShowCancelModal(true);
  }
  const handleShowPosponerModal = (idTurno) => {
    setTurnoId(idTurno);
    setShowPosponerModal(true);
  }  

  const handleDayChange = (day) => {
    setSelectedDays((prevSelectedDays) => ({
      ...prevSelectedDays,
      [day]: !prevSelectedDays[day],
    }));
  };


  const traerEspecialidades = () => {
    axios
      .get("http://localhost:5000/especialidad")
      .then((response) => {
        setEspecialidades(response.data);
      })
      .catch((error) => alert("aca hay algo raro"));
  }
  const insertardiasLaboralesss = () => {
    console.log(selectedDays)
    axios.post('http://localhost:5000/medico/insertardias', selectedDays)
    .then(function (response) {
      setidDiasLaborales(response.data[0].id)
      
    })
    .catch((error) => alert("mal el insert"));
  }

  useEffect(() => {
    insertardiasLaboralesss()   
  }, []);

  const Valores = (e) => {
    e.preventDefault();
    const formElement = e.target; // Reference to the form element
    const formulario = new FormData(formElement); 
    const medico={
      esp: espElegida,
      mail: formulario.get('Mail'),
      telefono: formulario.get('Telefono'),
      nombre: formulario.get('NombreApellidoM'),
      DiasLaborales: idDiasLaborales
    }
    axios.post('http://localhost:5000/medico', medico)
    .then(function (response) {
      console.log(idDiasLaborales);
      console.log("hola")
      console.log("medico bien")
      swal("Bien!", "Se elimino el plato del menu correctamente", "success");
      navigate("/administradoresAgenda");
    })
  }; 
  
  const onVolver = (e) => {
    e.preventDefault();
    navigate("/agenda");
  }

  useEffect(() => {
    traerEspecialidades()   

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
                    <Form.Select onChange={(e) => setEspElegida(e.target.value)}>
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


                    <div className="omrs-input-group">
                    <label className="omrs-input-filled">
                      <input className="u-full-width" type="email" name="Mail" required></input>
                      <span className="omrs-input-label">Mail</span>
                    </label>
			              </div>

                    <div className="omrs-input-group">
                    <label className="omrs-input-filled">
                      <input className="u-full-width" type="int" name="Telefono" required></input>
                      <span className="omrs-input-label">Telefono</span>
                    </label>
                    </div>

                    <div className="omrs-input-group">
                      <label className="omrs-input-filled">
                        <input className="u-full-width" type="text" name="NombreApellidoM" required></input>
                          <span className="omrs-input-label">Nombre/s y Apellido/s</span>
                      </label>
			              </div>


                  
                    <h2>Select your workdays:</h2>
                    <label>
                      
                      <input
                      className="izq"
                        type="checkbox"
                        checked={selectedDays.lunes}
                        onChange={() => handleDayChange('lunes')}
                      />
                      Lunes
                    </label>
                    <br></br>
                    <label>
                      
                      <input
                        type="checkbox"
                        checked={selectedDays.martes}
                        onChange={() => handleDayChange('martes')}
                      />
                      Martes
                    </label>
                    <br></br>
                    <label>
                      
                      <input
                        type="checkbox"
                        checked={selectedDays.miercoles}
                        onChange={() => handleDayChange('miercoles')}
                      />
                      Miercoles
                    </label>
                    <br></br>
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedDays.jueves}
                        onChange={() => handleDayChange('jueves')}
                      />
                      Jueves
                    </label>
                    <br></br>
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedDays.viernes}
                        onChange={() => handleDayChange('viernes')}
                      />
                      Viernes
                    </label>
                    <br></br>
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedDays.sabado}
                        onChange={() => handleDayChange('sabado')}
                      />
                      Sabado
                    </label>
                    
                    </div>
                    <br></br>                    
                  <button type="submit" className="botonLog" > Sacar </button> 
                  </center>
                  </form>
                  <br></br>
                  <center>
                  <button className="botonLog"  onClick={onVolver}> Volver a mi agenda </button>
                  </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
export default AgregarMedico;