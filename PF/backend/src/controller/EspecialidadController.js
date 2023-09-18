import { Router } from 'express';
import EspecialidadService from '../servicios/EspecialidadService.js';

const router = Router();
const especialidadServices = new EspecialidadService();

router.get('', async (req, res) => {
  console.log(`This is a get operation getEspecialidades`);
  const especialidades = await especialidadServices.GetEspecialidades();

  return res.status(200).json(especialidades);
});


export default router;