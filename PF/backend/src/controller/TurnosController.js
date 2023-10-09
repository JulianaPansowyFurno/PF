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

router.get('/especialidad/:id', async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a get operation getTurnos`);
  const filtros = await turnosService.getEstudio(req.params.id);

  return res.status(200).json(filtros);
});

router.put('', async (req, res) => {
  console.log(`This is a get operation update PosponerTurno`);
  const turno = await turnosService.PosponerTurno(req.body);

  return res.status(200).json(turno);
  });

router.post('/sacarturno', async (req, res) => {
  
  console.log(`This is a get operation getTurnos`);
  const turno = await turnosService.sacarTurno(req.body);

  return res.status(200).json(turno);
});

router.put('/:id', async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a get operation Cancelarrr`);
  const turno = await turnosService.cancelarTurno(req.params.id);
  return res.status(200).json(turno);
});

router.get('', async (req, res) => {
  console.log(`This is a get operation getEspecialidades`);
  const sedes = await turnosService.GetSede();

  return res.status(200).json(sedes);
});

export default router;