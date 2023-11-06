import { Router } from 'express';
import FiltroService from '../servicios/FiltrosService.js';

const router = Router();
const filtroserv = new FiltroService();

router.get('/Nombre', async (req, res) => {
  console.log(`This is a get operation getEspecialidades`);
  const especialidades = await filtroserv.GetMedicoNombre(req.query);
  return res.status(200).json(especialidades);
});


export default router;