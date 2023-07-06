import '../App.css';
import React from 'react';
import '../registro.css';
import background from "./Imagenes/fondoLogin.png";
import logoPNG from "./Imagenes/logoPNG.png";

const Registro = ({ MeLlevoValores, navigation }) => {
  const LogoFoto = ['Logo.png']

  const tomarValores = (e) => {
    e.preventDefault();
    const formulario = new FormData(e.target)
    console.log(formulario.get('usuario'))
    console.log(formulario.get('password'))
  
    const usuario={
      user: formulario.get('usuario'),
      pass: formulario.get('password')
    }
    console.log(usuario);
    MeLlevoValores(usuario); 
  };
  return(
    <div className="fondo" style={{ backgroundImage:`url(${background})` }}>
      <div className='conteiner' >
        <div id='formSize'>
          <div className="one-half column">
            <div id='Form' >
              <div className='fondoBlanco'id='bordesRedondos'>
                <form  onSubmit= {tomarValores}>
                  
                  
                  
                    <br></br>
                    <br></br>
                    <img src = {logoPNG} width='72%' ></img>
                    <center>
                    <div className="omrs-input-group">
                    <label className="omrs-input-filled">
                      <input className="u-full-width" type="text" name="nombre"   required></input>
                      <span className="omrs-input-label">Nombre</span>
                      {/* <span class="omrs-input-helper">Helper Text</span> */}
                    </label>
			            </div>
                  </center>
                    {/* <div id='colorLetrasLogin' className="mb-3">
                      <h3><b>Ingrese el usuario</b></h3>
                      <input className="u-full-width" type="text" name="usuario"  placeholder="Usuario"/>
                    </div> */}
                    <br></br>
                    <div id='colorLetrasLogin' className="mb-3">
                      <h3><b>Ingrese la contraseña</b></h3>
                      <input type="password" name="password" className="u-full-width" placeholder="Contraseña"/>
                    </div>
                    <br></br>
                    <br></br>
                    <button type="submit" className="btn btn-primary btn-sm" id="Boton1" >Entrar</button>
                    <button  type="Registro" className="btn btn-primary btn-sm" id="Boton2" >Registrarse</button>
                    <h5><a href='pag para cambiar contrasena'><u>Olvide mi contraseña</u></a>   </h5> 
                    
                  
                  
                {/* <form>
			<div class="omrs-input-group">
				<label class="omrs-input-filled">
				  <input required>
				  <span class="omrs-input-label">Normal</span>
					<span class="omrs-input-helper">Helper Text</span>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><circle cx="15.5" cy="9.5" r="1.5"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-5-6c.78 2.34 2.72 4 5 4s4.22-1.66 5-4H7z"/></svg>
				</label>
			</div>
			<div class="omrs-input-group">
				<label class="omrs-input-filled omrs-input-danger">
				  <input required>
				  <span class="omrs-input-label">Danger</span>
					<span class="omrs-input-helper">Helper Text</span>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><circle cx="15.5" cy="9.5" r="1.5"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-5-6c.78 2.34 2.72 4 5 4s4.22-1.66 5-4H7z"/></svg>
				</label>
			</div>
			<div class="omrs-input-group">
				<label class="omrs-input-underlined">
				  <input required disabled>
				  <span class="omrs-input-label">Danger</span>
					<span class="omrs-input-helper">Helper Text</span>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><circle cx="15.5" cy="9.5" r="1.5"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-5-6c.78 2.34 2.72 4 5 4s4.22-1.66 5-4H7z"/></svg>
				</label>
			</div>
		</form> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



    
  )
};


export default Registro;
