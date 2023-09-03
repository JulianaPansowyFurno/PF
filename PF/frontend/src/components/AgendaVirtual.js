import '../App.css';
import axios, { all } from 'axios';
import React, { useEffect, useState } from "react";
import {  Link, useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import background from "./Imagenes/fondoLogin.png";



const AgendaVirtual = () => {
  const [turno, setTurno] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
  axios.get('http://localhost:5000/turno/3') // Poner id paciente en el link
  .then((response) => {
    setTurno(response.data);
    console.log(response.data)
  })
    .catch((error) => alert("mallllll grrrr aahhh yeah yeah sos horribla"));
    }, []);

    const onForm = (e) => {
      e.preventDefault();
      navigate("/sacarTurno");
    }

  return (
    
    <div className="fondo2" style={{ backgroundImage:`url(${background})` }}>
      {turno.map((tur) => {
        return (

          <div className='agendaVirtual'> 
            <Container>
              <Col>
              <Row>
                Paciente
              </Row>
              <Row>
              {tur.FkPaciente}
              </Row>
              </Col> 


              <Col>
              <Row>
                Estado
              </Row>
              <Row>
              {tur.Cancelado ? "Cancelado" : "No cancelado"}
              </Row>
              </Col> 

              <Col>
              <Row>
                Asistio
              </Row>
              <Row>
              {tur.Asistio ? "Si" : "No"}
              </Row>
              </Col> 

              <Col>
              <Row>
                Estudio
              </Row>
              <Row>
              {tur.FkEstudio}
              </Row>
              </Col> 

              <Col>
              <Row>
                Medico
              </Row>
              <Row>
              {tur.FkMedico}
              </Row>
              </Col> 


              

              <Col>
              <Row>
                Sede
              </Row>
              <Row>
              {tur.FkSede}
              </Row>
              </Col> 

               <Col>
              <Row>
                Fecha
              </Row>
              <Row>
                {tur.Fecha}
              </Row>
              </Col> 

            </Container>
            
            {/* <div className="container text-center">
              <div className="row">
              <b><div className="col" id='tituloAgenda'>Fecha   Sede  Paciente     Medico     Estado   Asistencia    Estudio</div></b>
                <div className="col" id='infoAgenda'>{tur.Fecha}   {tur.FkSede}   {tur.FkPaciente} {tur.FkMedico} {tur.Cancelado ? "Cancelado" : "No cancelado"} {tur.Asistio ? "Asistió" : "No asistió"} {tur.FkEstudio}</div>
              </div>
            </div>  */}

            
            </div>
        );

        
        
      })};
      
      <div id="Boton2">
          <div className='letrasBotonIngreso'>
          <b><button type="form" className="btn btn-primary btn-sm" id="Boton2" onClick={onForm}> Sacar Turno</button></b>
      </div>
    </div>
    </div>
  );
}
export default AgendaVirtual;