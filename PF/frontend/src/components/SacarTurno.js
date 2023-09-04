import '../App.css';
import background from "./Imagenes/fondoLogin.png";
import logoPNG from "./Imagenes/logoPNG.png";
import '../botonLindo.css';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from "react";

const SacarTurno = () => {
  const [turno, setTurno] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/turno/3") // Poner id paciente en el link
      .then((response) => {
        setTurno(response.data);
        console.log(response.data);
      })
      .catch((error) => alert("mallllll"));
  }, []);

  const onRegistro = (e) => {
    e.preventDefault();
  }


  return(
    <div className="fondo" style={{ backgroundImage:`url(${background})` }}>
      <div className='conteiner' >
        <div id='formSize'>
          <div className="one-half column">
            <div id='Form' >
              <div className='fondoBlanco'id='bordesRedondos'>
              <form>
                  <br></br>

                  <img src = {logoPNG} width='80%' ></img>
                  <br></br>
                  <br></br>
                    <div className="omrs-input-group">
                      <label className="omrs-input-filled">
                        <input className="u-full-width" type="text" name="usuario" required></input>
                        <span className="omrs-input-label">Ingrese el usuario</span>
                      </label>
			              </div>
                  <br></br>

                  {/* {turno.map((tur) => {
                  return (
                    <Form.Select>
                      <option>Default select</option>
                    </Form.Select>
                    <br></br>
                  );
                })}; */}

                  {/* BOTONES PARA LA PROXIMA PAGINA*/}
                  <div id="Boton2">
                  <div className='letrasBotonIngreso'>
                  <b><button type="submit" className="btn btn-primary btn-sm" id="Boton2" >Entrar</button></b>
                  </div>
                  </div>

  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};


export default SacarTurno;