import "../App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
 import background from "./Imagenes/fondoLogin.png";
 import Button from 'react-bootstrap/Button';
 import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const AgendaVirtual = () => {
  const [turno, setTurno] = useState([]);
  const [id, setId] = useState("");
  const navigate = useNavigate();
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [showPosponerModal, setShowPosponerModal] = useState(false);

  const handleCloseCancelModal = () => setShowCancelModal(false);
  const handleClosePosponerModal = () => setShowPosponerModal(false);

  const handleShowCancelModal = () => setShowCancelModal(true);
  const handleShowPosponerModal = (id) => {
    setId(id);
    setShowPosponerModal(true);
  };


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

  const onclickCancelar = (id) => {
    onCancelar(id); 
    handleCloseCancelModal();
  };

  return (
    <div className="conteiner" style={{ backgroundImage: `url(${background})` }} >
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
                    <th></th>
                    <th></th>
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
                    <td>
                    <Button className="BTNAgenda" variant="primary" onClick={handleShowCancelModal}>
                      Cancelar
                    </Button>
                    </td>
                    <td>
                    <Button className="BTNAgenda" variant="primary"  onClick={() => {handleShowPosponerModal(tur.IdTurno)}}>
                      Posponer
                    </Button>
                    </td>
                  </tr>
                </tbody>
              

    

              <Modal show={showCancelModal} onHide={handleCloseCancelModal}>
                  <Modal.Header closeButton>
                    <Modal.Title>Cancelar turno </Modal.Title>
                  </Modal.Header>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseCancelModal}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={() => onclickCancelar(tur.IdTurno)}>
                    Save Changes
                  </Button>
                  </Modal.Footer>
              </Modal>

              <Modal show={showPosponerModal} onHide={handleClosePosponerModal}>
              <Modal.Header closeButton>
                <Modal.Title>Posponer Turno</Modal.Title>
              </Modal.Header>
              <Modal.Body><br></br>
              <Form onSubmit= {onPosponer}> 
              <Form.Text className="text-muted">
                        Elige la fecha  a la que la quieres cambiar:
                      </Form.Text>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Change de date</Form.Label>
                      <Form.Control type="date" placeholder="Enter date" />
                    </Form.Group>
                    {/* <Button variant="primary" type="submit">
                      Submit
                    </Button> */}
                  </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClosePosponerModal}>
                  Close
                </Button>
                <Button variant="primary" type="submit" onClick={handleClosePosponerModal}>
                  Guardar
                </Button>
              </Modal.Footer>
            </Modal>
            {/* <button className="BTNAgenda" onClick={() => onCancelar(tur.IdTurno)}> Cancelado</button>
              <button className="BTNAgenda" onClick={() => onPosponer(tur.IdTurno)}> Posponer </button> */}
             
              <br></br>
              </Table>
                </div>
          );
        })} 

            <b>
              <Button
                type="form"   className="botonAG"  onClick={onForm}>
                    Sacar Turno
              </Button>
            </b>
      </Container>
    </div>
  );
      
};
export default AgendaVirtual;