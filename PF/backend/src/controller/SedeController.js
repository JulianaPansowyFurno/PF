import { Router } from 'express';
import SedeService from '../servicios/SedeService.js';

const router = Router();
const sedeservice = new SedeService();

router.get('', async (req, res) => {
  console.log(`This is a get operation getEspecialidades`);
  const especialidades = await sedeservice.GetSede();

  return res.status(200).json(especialidades);
});


export default router;