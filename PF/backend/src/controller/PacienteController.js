import { Router } from 'express';
import UsuarioService from '../servicios/UsuarioService.js';
import PacienteService from '../servicios/PacienteService.js';

const router = Router();
const pacientesServices = new PacienteService();

router.post('', async (req, res) => {
  console.log(`This is a get operation create`);
    const paciente = await pacientesServices.CrearPaciente(req.body);
    return res.status(200).json(paciente);
  });
export default router;