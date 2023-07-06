import React, { useState } from 'react';
import LoginFront from "./components/LoginFront.js";
import RegistroFront from "./components/RegistroFront.js"

const App = () => {
  const [data, setData] = React.useState(' ');
    
  const sacoDatosDeLogin = (props) => {
    console.log(props);
  };
  const sacoDatosDeRegistro = (props) => {
    console.log(props);
  };

  React.useEffect(() => {
    fetch("/RegistroBack")
      .then((res) => res.json())
      .then((data) => setData(data.message));
    }, 
  []);


  return(
    <div className="App">
        <div className="row">  
          {/* <LoginFront MeLlevoValores = {sacoDatosDeLogin}/> */}
          <RegistroFront MeLlevoValores = {sacoDatosDeRegistro}/>
        </div>
    </div>
  )
};
export  default App;
