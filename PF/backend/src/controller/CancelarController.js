import { Router } from 'express';
import CancelarService from '../servicios/CancelarService.js';

const router = Router();
const cancelarservice = new CancelarService();

router.put('/:id', async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a get operation Cancelarrr`);
  const turno = await cancelarservice.cancelarTurno(req.params.id);
  return res.status(200).json(turno);
});


export default router;