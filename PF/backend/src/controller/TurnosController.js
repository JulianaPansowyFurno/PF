import { Router } from 'express';
import TurnosService from '../servicios/TurnosService.js';


const router = Router();
const turnosService = new TurnosService();

router.get('/:id', async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a get operation getTurnos`);
  const turno = await turnosService.getTurnosById(req.params.id);

  return res.status(200).json(turno);
});

router.get('', async (req, res) => {
  console.log(`This is a get operation getTurnos`);
  const turno = await turnosService.getEstudio();

  return res.status(200).json(turno);
});

router.post('', async (req, res) => {
  
  console.log(`This is a get operation getTurnos`);
  const turno = await turnosService.sacarTurno(req.body);

  return res.status(200).json(turno);
});

router.put('', async (req, res) => {
  console.log(`Request URL Param: ${req.body.id}`);
  console.log(`This is a get operation getTurnos`);
  const turno = await turnosService.cancelarTurno(req.body.id);
  return res.status(200).json(turno);
});

export default router;