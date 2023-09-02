import '../App.css';
import axios, { all } from 'axios';
import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



import background from "./Imagenes/fondoLogin.png";

const AgendaVirtual = () => {
  const [turno, setTurno] = useState([]);

  useEffect(() => {
  axios.get('http://localhost:5000/turno/13') // Poner id paciente en el link
  .then((response) => {
    setTurno(response.data);
    console.log(response.data)
  })
    .catch((error) => alert("mallllll grrrr aahhh yeah yeah sos horribla"));
    }, []);

  return (
    
    <div className="fondo" style={{ backgroundImage:`url(${background})` }}>
      {turno.map((tur) => {
        return (
          <div>

            <Container>
              <Row>
                1 of 1
              </Row>
              <Row>
                2
              </Row>
              <Row>
                3
              </Row>
              {/* <Col>
              <Row>
                1 of 1
              </Row>
              <Row>
                2
              </Row>
              <Row>
                3
              </Row>
              </Col> */}

            </Container>
            <Container>
              <Row>
                1 of 1
              </Row>
              <Row>
                2
              </Row>
              <Row>
                3
              </Row>
              {/* <Col>
              <Row>
                1 of 1
              </Row>
              <Row>
                2
              </Row>
              <Row>
                3
              </Row>
              </Col> */}

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
    </div>
  );
}
export default AgendaVirtual;