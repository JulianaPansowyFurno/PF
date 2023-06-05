import { Router } from 'express';
import TurnosServices from '../servicios/TurnosServices.js';


const router = Router();
const turnosServices = new TurnosServices();

router.get('', async (req, res) => {
  console.log(`This is a get operation getTurnos`);
  const turno = await turnosServices.getTurnos();

  return res.status(200).json(turno);
});

export default router;