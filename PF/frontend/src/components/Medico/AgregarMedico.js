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

  const Valores = (e) => {
    e.preventDefault();
    const formElement = e.target; // Reference to the form element
    const formulario = new FormData(formElement); 
    const medico={
      esp: espElegida,
      mail: formulario.get('Mail'),
      telefono: formulario.get('Telefono'),
      nombre: formulario.get('NombreApellidoM'),
      diaslaborales: selectedDays
    }
    axios.post('http://localhost:5000/medico', medico)
    .then(function (response) {
      console.log(response);
      navigate("/agenda");

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
                      Lunes
                      <input
                        type="checkbox"
                        checked={selectedDays.lunes}
                        onChange={() => handleDayChange('lunes')}
                      />
                    </label>
                    <br></br>
                    <label>
                      Martes
                      <input
                        type="checkbox"
                        checked={selectedDays.martes}
                        onChange={() => handleDayChange('martes')}
                      />
                    </label>
                    <br></br>
                    <label>
                      Miercoles
                      <input
                        type="checkbox"
                        checked={selectedDays.miercoles}
                        onChange={() => handleDayChange('miercoles')}
                      />
                    </label>
                    <br></br>
                    <label>
                      Jueves
                      <input
                        type="checkbox"
                        checked={selectedDays.jueves}
                        onChange={() => handleDayChange('jueves')}
                      />
                    </label>
                    <br></br>
                    <label>
                      Viernes
                      <input
                        type="checkbox"
                        checked={selectedDays.viernes}
                        onChange={() => handleDayChange('viernes')}
                      />
                    </label>
                    <br></br>
                    <label>
                      Sabado
                      <input
                        type="checkbox"
                        checked={selectedDays.sabado}
                        onChange={() => handleDayChange('sabado')}
                      />
                    </label>
                    
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
export default AgregarMedico;