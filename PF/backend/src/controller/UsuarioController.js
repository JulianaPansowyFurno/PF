import { Router } from 'express';
import UsuarioService from '../servicios/UsuarioService.js';


const router = Router();
const usuarioServices = new UsuarioService();

router.get('', async (req, res) => {
  console.log(`This is a get operation getUsuario`);
  let NombreApellido = req.query.NombreApellido
  let Contraseña = req.query.Contraseña
  const usuarios = await usuarioServices.getUsuario(NombreApellido, Contraseña);

  return res.status(200).json(usuarios);
});

router.post('', async (req, res) => {
  console.log(`This is a get operation create`);
    const usuarios = await usuarioServices.CrearUsuario(req.body);
    return res.status(200).json(usuarios);
  });

export default router;