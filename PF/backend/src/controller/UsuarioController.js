import { Router } from 'express';
import UsuarioService from '../servicios/UsuarioService.js';


const router = Router();
const usuarioServices = new UsuarioService();

router.get('', async (req, res) => {
  console.log(`This is a get operation getuaer`);
  const turno = await turnosServices.getTurnos();

  return res.status(200).json(turno);
});

export default router;