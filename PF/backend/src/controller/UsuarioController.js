import { Router } from 'express';
import UsuarioService from '../servicios/UsuarioService.js';
import PacienteService from '../servicios/PacienteService.js';

const router = Router();
const usuarioServices = new UsuarioService();
const pacientesServices = new PacienteService();

// El login devuelve true si existe un usuario con ese user y pass, o false si no existe
router.get('', async (req, res) => {
  console.log(`This is a get operation getUsuario`);
  let user = req.query.user
  let pass = req.query.pass
  const loginSuccess = await usuarioServices.getUsuario(user, pass);

  return res.status(200).json(loginSuccess);
});


// El register crea usuario y paciente (si es que no existe un usuario con ese nombre de usuario)
router.post('', async (req, res) => {
  console.log(`This is a get operation create`);

  const usuario = await usuarioServices.CrearUsuario(req.body);

  if (usuario.id > 0) {
    const paciente = await pacientesServices.CrearPaciente(req.body, usuario.id);
    return res.status(200).json("Usuario Creado");
  } else {
    return res.status(200).json("El usuario ya existe");
  }
  /* 
  {
    "nameandsur": "JulianPan",
    "DNI": "47350201",
    "medicalcover": "OSDE",
    "email": "juli@pura.com",
    "cel": "1150276669",
    "birth": "2006-04-10",
    "user": "Uriel Strauss",
    "pass": "Uri1234"
  }
  */
  });

  router.delete('/:id', async (req, res) => {
    console.log(`Request URL Param: ${req.params.id}`);
    console.log(`This is a delete operation`);
  
    const usuario = await usuarioServices.DeleteUsuario(req.params.id);
  
    return res.status(200).json(usuario);
  });

export default router;