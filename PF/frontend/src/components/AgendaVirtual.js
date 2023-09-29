import "../App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
 import background from "./Imagenes/fondoLogin.png";
 import Button from 'react-bootstrap/Button';
 import Modal from 'react-bootstrap/Modal';

const AgendaVirtual = () => {
  const [turno, setTurno] = useState([]);
  const [id, setId] = useState("");
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () =>   setShow(false);

  const handleShow = () => setShow(true);


  const traerTurnos = () => {
    axios
      .get("http://localhost:5000/turno/13") // Poner id paciente en el link
      .then((response) => {
        setTurno(response.data);
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
     axios.put("http://localhost:5000/turno", { id })
     .then(function (response) {
       traerTurnos();
     });
   };

   const onPosponer = (e) => {
    e.preventDefault();
    const formElement = e.target; // Reference to the form element
    const formulario = new FormData(formElement); 
    const fecha={
      IdTurno: id,
      Fecha: formulario.get('Fecha')
    }
    axios.put("http://localhost:5000/turno", fecha)
    .then(function (response) {
      traerTurnos();
    });
    // navigate("/posponer/${persona.id}");
  };

  return (
    <div
      className="conteiner"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Container>
         {turno.map((tur) => {
          return (
            <div key={tur.IdTurno}>
             

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
                      {("0" + new Date(tur.Fecha).getDate()).substr(-2) + "-" + ("0" + new Date(tur.Fecha).getMonth()).substr(-2) + "-" +
                        new Date(tur.Fecha).getFullYear()}
                    </td>
                    <td>{tur.NombreApellidoM}</td>
                    <td>{tur.Asistio ? "Si" : "No"}</td>
                    <td>{tur.Cancelado ? "Cancelado" : "No cancelado"}</td>
                    <td>{tur.Estudio}</td>
                    <td>{tur.Servicio}</td>
                    <td>
                      {("0" + new Date(tur.Hora).getHours()).substr(-2) + ":" + ("0" + new Date(tur.Hora).getMinutes()).substr(-2)}
                    </td>
                  </tr>
                </tbody>
              
              <center>
          
      <Button className="BTNAgenda" variant="primary" onClick={handleShow}>
        Cancelar
      </Button>

      <Button className="BTNAgenda" variant="primary"  onClick={() => {handleShow(tur.IdTurno)}}>
        Posponer
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cancelar turno </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose} > 
           <div on={() => onCancelar(tur.IdTurno)}>
            Save Changes
            </div>
          </Button>
        </Modal.Footer>
      </Modal>

                    <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Posponer Turno</Modal.Title>
              </Modal.Header>
              <Modal.Body><br></br>
                    <div className="omrs-input-group">
                    <label className="omrs-input-filled">
                      <input className="u-full-width" type="date" name="Fecha" required></input>
                      <span className="omrs-input-label">Fecha a la que desea pasar el turno: </span>
                    </label>
			              </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary"  onClick={handleClose}>
                  Guardar
                </Button>
              </Modal.Footer>
            </Modal>
         {/* <button className="BTNAgenda" onClick={() => onCancelar(tur.IdTurno)}> Cancelado</button>
          <button className="BTNAgenda" onClick={() => onPosponer(tur.IdTurno)}> Posponer </button> */}
          </center>
          <br></br>
          </Table>
            </div>
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