import { Router } from 'express';
import UsuarioService from '../servicios/UsuarioService.js';
import PacienteService from '../servicios/PacienteService.js';

const router = Router();
const usuarioServices = new UsuarioService();
const pacientesServices = new PacienteService();

router.get('', async (req, res) => {
  console.log(`This is a get operation getUsuario`);
  let usuario = req.query.usuario
  let Contraseña = req.query.Contraseña
  const usuarios = await usuarioServices.getUsuario(usuario, Contraseña);

  return res.status(200).json(usuarios);
});

router.post('', async (req, res) => {
  console.log(`This is a get operation create`);
    const usuarios = await usuarioServices.CrearUsuario(req.body);
    const paciente = await pacientesServices.CrearPaciente(req.body);
    return res.status(200).json("Usuario Creado");
  });

export default router;