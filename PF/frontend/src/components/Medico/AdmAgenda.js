import "../../App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import background from "../Imagenes/fondoLogin.png";
import { MyContext } from "../../MyContext";
import { useContext } from 'react';
import AgregarMedico from "./AgregarMedico";

const AgendaVirtual = () => {
  const [turno, setTurno] = useState([]);
  const { id, setId } = useContext(MyContext);
  const navigate = useNavigate();


  const traerTurnos = () => {
    axios.get(`http://localhost:5000/medico`) // Poner id paciente en el link
      .then((response) => {
        setTurno(response.data);
      })
      .catch((error) => alert("mallllll"));
  };

  useEffect(() => {
    traerTurnos();
  }, []);

  const AgregarMedico = () => {
    navigate("/agregarMedico")
  };


  return (
    <div className="conteiner" style={{ backgroundImage: `url(${background})` }} >
      <Container>
        <Table striped="columns">
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

            {turno.map((tur) => {
              return (
                <tr>
                  <td key={tur.IdTurno}>{tur.NombreApellido}</td>
                  <td>{tur.Sede}</td>
                  <td>
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
                  <td>{tur.Servicio}</td>
                  <td>
                    {("0" + new Date(tur.Hora).getHours()).substr(-2) + ":" + ("0" + new Date(tur.Hora).getMinutes()).substr(-2)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>

        <button className="botonLog"  onClick={AgregarMedico}> Agregar Medica </button> 
      </Container>
    </div>
  );

};
export default AgendaVirtual;