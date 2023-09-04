import "../App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import cruzAgenda from "./Imagenes/cruzAgenda.png";
import relojAgenda from "./Imagenes/relojAgenda.png";
import background from "./Imagenes/fondoLogin.png";

const AgendaVirtual = () => {
  const [turno, setTurno] = useState([]);
  const navigate = useNavigate();

  const traerTurnos = () => {
    axios
      .get("http://localhost:5000/turno/13") // Poner id paciente en el link
      .then((response) => {
        setTurno(response.data);
        console.log(response.data);
      })
      .catch((error) => alert("mallllll"));
  };

  useEffect(() => {
    traerTurnos();
  }, []);

  const onForm = (e) => {
    //e.preventDefault();
    navigate("/sacarTurno");
  };

  const onCancelar = (id) => {
    axios.put("http://localhost:5000/turno", { id }).then(function (response) {
      traerTurnos();
      console.log("jejejuju tiene caca");
    });
  };

  return (
    <div
      className="conteiner"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Container>
        {turno.map((tur) => {
          return (
            <>
              <Table className="table table-hover-fluid">
                <thead>
                  <tr>
                    <th>Paciente</th>
                    <th>Sede</th>
                    <th>Fecha</th>
                    <th>Medico</th>
                    <th>Asistio</th>
                    <th>Estado</th>
                    <th>Estudio</th>
                    <th>Servicio</th>
                    <th>Hora</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{tur.NombreApellido}</td>
                    <td>{tur.Sede}</td>
                    <td>
                      {("0" + new Date(tur.Fecha).getDate()).substr(-2) +
                        "-" +
                        ("0" + new Date(tur.Fecha).getMonth()).substr(-2) +
                        "-" +
                        new Date(tur.Fecha).getFullYear()}
                    </td>
                    <td>{tur.NombreApellidoM}</td>
                    <td>{tur.Asistio ? "Si" : "No"}</td>
                    <td>{tur.Cancelado ? "Cancelado" : "No cancelado"}</td>
                    <td>{tur.Estudio}</td>
                    <td>{tur.Servicio}</td>
                    <td>
                      {("0" + new Date(tur.Hora).getHours()).substr(-2) +
                        ":" +
                        ("0" + new Date(tur.Hora).getMinutes()).substr(-2)}
                    </td>
                  </tr>
                </tbody>
              </Table>
              <center>
              <button onClick={() => onCancelar(tur.IdTurno)}>
                <img src={cruzAgenda} width="7%"/>
              </button>
              <button onClick={() => onCancelar(tur.IdTurno)}>
                <img src={relojAgenda} width="7%" />
              </button>
              </center>
              <br></br>
            </>
          );
        })}

        <div id="Boton2">
          <div className="letrasBotonIngreso">
            <b>
              <button
                type="form"
                className="btn btn-primary btn-sm"
                id="Boton2"
                onClick={onForm}
              >
                {" "}
                Sacar Turno
              </button>
            </b>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default AgendaVirtual;

/*


{
                /* 
                
                

                <Row></Row>
              </Col>

              <Col>
                <Row>Asistio</Row>
                <Row></Row>
              </Col>

              <Col>
                <Row>Estudio</Row>
                <Row></Row>
              </Col>

              <Col>
                <Row>Medico</Row>
                <Row>{tur.NombreApellidoM}</Row>
              </Col>

              <Col>
                <Row>Sede</Row>
                <Row>{tur.Sede}</Row>
              </Col>

              <Col>
                <Row>Fecha</Row>
                <Row>{tur.Fecha}</Row>
              </Col>
                
                
                
                <div className="container text-center">
              <div className="row">
              <b><div className="col" id='tituloAgenda'>Fecha   Sede  Paciente     Medico     Estado   Asistencia    Estudio</div></b>
                <div className="col" id='infoAgenda'>{tur.Fecha}   {tur.FkSede}   {tur.FkPaciente} {tur.FkMedico} {tur.Cancelado ? "Cancelado" : "No cancelado"} {tur.Asistio ? "Asistió" : "No asistió"} {tur.FkEstudio}</div>
              </div>
            </div>  */
