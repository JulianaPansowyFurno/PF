import "../../App.css";
import"../../botonLindo.css";
import"../../index.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import background from "../Imagenes/fondoLogin.png";
import { MyContext } from "../../MyContext";
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import isMatch from 'date-fns/isMatch'


const AgendaVirtual = () => {
  const [turno, setTurno] = useState([]);
  const { id, setId } = useContext(MyContext);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [showPosponerModal, setShowPosponerModal] = useState(false);
  const [turnoId, setTurnoId] = useState();
  const navigate = useNavigate();
  const [pacientes, setpacientes] = useState([]);
  const [pac, setPac] = useState([]);
  const [medicos, setmedicos] = useState([]);
  const [unMedico, setunMedico] = useState([]);
  const [Fecha, setFecha] = useState("");
  const [especialidades, setEspecialidades] = useState([]);



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


  const onPosponer = (e, IdTurno) => {
    e.preventDefault();
    const formElement = e.target; // Reference to the form element
    const formulario = new FormData(formElement);
    const fecha = {
      IdTurno: IdTurno,
      Fecha: formulario.get('Fecha')
    }
    axios.put("http://localhost:5000/turno", fecha)
      .then(function (response) {
        traerTurnos();
      });
    
  };

  const onclickCancelar = (IdTurno) => {
    axios.put(`http://localhost:5000/cancelar/${IdTurno}`)
      .then(function (response) {
        traerTurnos();
      });
        


    handleCloseCancelModal();
  };

  const traerTurnos = () => {
    axios.get(`http://localhost:5000/medico`)
      .then((response) => {
        setTurno(response.data);
      })
      .catch((error) => alert("mallllll"));
        

  };

  useEffect(() => {
    if( Fecha )
    {
      filtroFecha();
    }else{
      traerTurnos();
      traerPacientes();
      traerMedicos();
      traerEspecialidades();
    }
    
  }, []);

  useEffect(() => {
    if( Fecha )
    {
      filtroFecha();
    }else{
      traerTurnos();
    }    
  }, [Fecha]);

  
  useEffect(() => {
    
      traerTurnos();
    
  }, []);

  const AgregarMedico = () => {
    navigate("/agregarMedico")
  };
  const Volver = () => {
    navigate("/")
  };

  const traerPacientes = () => {
    axios
      .get("http://localhost:5000/paciente")
      .then((response) => {
        setpacientes(response.data);
      })
      .catch((error) => alert("aca hay algo raro"));
        

  }

  const filtroNombre = (IdPaciente) => {
    console.log(IdPaciente)
    axios.get(`http://localhost:5000/filtro/${IdPaciente}`)
      .then((response) => {
        setTurno(response.data);
      })
      .catch((error) => alert("aca hay algo raro"));
      

  }

  const traerMedicos = () => {
    axios
      .get("http://localhost:5000/medico/getAll")
      .then((response) => {
        setmedicos(response.data);
      })
      .catch((error) => alert("aca hay algo raro"));
        

  }

  const filtroMedicos = (IdMedico) => {
    console.log(IdMedico)
    axios.get(`http://localhost:5000/filtro/nombreMed/${IdMedico}`)
      .then((response) => {
        console.log(response)
        setTurno(response.data);
      })
      .catch((error) => alert("aca hay algo raro"));

  }

  
  const filtroFecha = () => {
    console.log(Fecha)
    axios.get(`http://localhost:5000/filtro?Fecha=${Fecha}`)
    .then((response) => {
      console.log(response.data)
      setTurno(response.data);
    })
    .catch((error) => alert("aca hay algo raro"));

  }

  const filtroEspecialidad = (idesp) => {
    axios.get(`http://localhost:5000/filtro/esp/${idesp}`)
    .then((response) => {
      console.log(response.data)
      setTurno(response.data);
    })
    .catch((error) => alert("aca hay algo raro"));

  }

  const traerEspecialidades = () => {
    axios
      .get("http://localhost:5000/especialidad")
      .then((response) => {
        setEspecialidades(response.data);
      })
      .catch((error) => alert("aca hay algo raro"));

  }


  return (
    <div className="conteiner" style={{ backgroundImage: `url(${background})` }} >


      <Container>
      <br></br>

        <center>
      <Form.Label className="letraFiltroAdm">
          <b>Filtros</b>
        </Form.Label>
        </center>


        
          <thead>
            <tr>
                  <th> <Form.Select id="formSelect" onChange={(e) => filtroNombre(e.target.value)}>
                  <option>Seleccionar nombre del paciente...</option>
                  
                    {pacientes.map((e) => {
                      
                      return(                
                        <option value={e.IdPaciente}>
                          {e.NombreApellido}
                        </option>
                    );
                    
                })}
                </Form.Select>
                      </th>
                    <th> <Form.Select  id="formSelect" onChange={(e) => filtroMedicos(e.target.value)}>
                <option>Seleccionar nombre del medico...</option>
                  {medicos.map((e) => {
                    return(                
                      <option value={e.IdMedico}>
                        {e.NombreApellidoM}
                      </option>
                  );
                  
              })}
              </Form.Select>
                  </th>
              <th><Form.Select  id="formSelect" onChange={(e) => filtroEspecialidad(e.target.value)}>
          <option>Seleccionar la especialidad...</option>
            {especialidades.map((e) => {
              return(                
                <option value={e.IdEspecialidad}>
                  {e.Especialidad}
                </option>
            );
            
        })}
        </Form.Select>
        </th>
              
           
            </tr>
          
          </thead>
          <thead>
          <tr>
          <th> </th> 
           
              <th> 
                <Form.Group>
                <br></br>
              <Form.Control
                id="formSelect"
                type="date"
                controlId="date"
                name="date"
                onChange={(e) => setFecha(e.target.value)}
                placeholder="Ingrese la fecha por la cual filtrar"  
              />
            </Form.Group>
            
        </th>
        <th> </th> 
             
           
            </tr>
          </thead>

        
     

       
        
        
      <br></br>
      <br></br>

<center>
<Form.Label className="letraFiltroAdm">
  <b>Turnos</b>
</Form.Label>
</center>
        <Table striped bordered hover variant="light">
          <thead>
            <tr>
              <th>Paciente</th>
              <th>Sede</th>
              <th>Fecha</th>
              <th>Medico</th>
              <th>Asistio</th>
              <th>Estado</th>
              <th>Estudio</th>
              <th>Especialidad</th>
              <th>Hora</th>
              <th></th>
              <th></th>
            </tr>
          
          </thead>
          <tbody>

            {turno.map((tur) => {
              return (
                <tr>
                  <td key={tur.IdTurno}>{tur.NombreApellido}</td>
                  <td>{tur.Sede}</td>
                  <td id="fecha">
                    {(() => {
                      const fecha = new Date(tur.Fecha);
                      return (
                        ("0" + (fecha.getDate() + 1)).slice(-2) +
                        "-" +
                        ("0" + (fecha.getMonth() + 1)).slice(-2) +
                        "-" +
                        fecha.getFullYear()
                      );
                    })()}
                  </td>
                  <td>{tur.NombreApellidoM}</td>
                  <td>{tur.Asistio ? "Si" : "No"}</td>
                  <td>{tur.Cancelado ? "Cancelado" : "No cancelado"}</td>
                  <td>{tur.Estudio}</td>
                  <td>{tur.Especialidad}</td>
                  <td>
                    {("0" + new Date(tur.Hora).getHours()).substr(-2) + ":" + ("0" + new Date(tur.Hora).getMinutes()).substr(-2)}
                  </td>
                  <td>
                    <button className="BTNAgenda" onClick={() => handleShowCancelModal(tur.IdTurno)}>
                    Cancelar
                  </button>
                  </td>
                  <td>
                    <button className="BTNAgenda"  onClick={() => handleShowPosponerModal(tur.IdTurno)}>
                      Posponer
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <center>
        <button className="botonSacarTurno"  onClick={AgregarMedico}> Agregar Medico </button> 
        <br></br>
        <br></br>
        <button className="botonSacarTurno"  onClick={Volver}> Volver</button>
        </center> 
      </Container>
      <Modal show={showCancelModal} onHide={handleCloseCancelModal}>
        <Modal.Header closeButton>
          <Modal.Title>Cancelar turno </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <button  className="BTNAgenda" variant="secondary" onClick={handleCloseCancelModal}>
            Close
          </button>
          <button  className="BTNAgenda" variant="primary" onClick={() => onclickCancelar(turnoId)}>
            Save Changes
          </button>
        </Modal.Footer>
        
      </Modal>

      <Modal show={showPosponerModal} onHide={handleClosePosponerModal}>
        <Modal.Header closeButton>
          <Modal.Title>Posponer Turno</Modal.Title>
        </Modal.Header>
        <Modal.Body><br></br>
          <Form onSubmit={(e) => onPosponer(e, turnoId)}>
            <Form.Text className="text-muted">
              Elige la fecha  a la que la quieres cambiar:
            </Form.Text>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Change de date</Form.Label>
              <Form.Control type="date" name="Fecha" placeholder="Enter date" />
            </Form.Group>


            <Modal.Footer>
              <button  className="BTNAgenda" variant="secondary" onClick={handleClosePosponerModal}>
                Close
              </button>
              <button  className="BTNAgenda" variant="primary" type="submit" onClick={handleClosePosponerModal}>
                Guardar
              </button>

            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </div>

  );

};
export default AgendaVirtual;