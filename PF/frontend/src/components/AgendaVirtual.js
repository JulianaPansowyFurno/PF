import '../App.css';
import axios from 'axios';
import React, { useEffect, useState } from "react";

import background from "./Imagenes/fondoLogin.png";

const AgendaVirtual = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
  axios.get('http://localhost:5000/turno/2') // Poner id paciente en el link
  .then((result) => {
    console.log(result.data);
    setPosts(result.data);
  })
    .catch((error) => console.log(error));
    }, []);


  return (
    <div className="fondo" style={{ backgroundImage:`url(${background})` }}>
      {posts.map((data) => {
        
        //   <div class="container text-center">
        //   <div class="row">
        //     <div class="col">
        //     <h2> Fecha</h2>
        //     <p>{data.Fecha}</p>
        //     </div>
        //     <div class="col">
        //     <p>{data.FkPaciente}</p>
        //     <p>{data.Cancelado}</p>
        //     <p>{data.FkEstudio}</p>
        //     <p>{data.FkServicio}</p>
        //     </div>
        //     <div class="col">
        //       Column
        //     </div>
        //   </div>
        // </div>
            

      
      })}
    </div>
  );
}
export default AgendaVirtual;