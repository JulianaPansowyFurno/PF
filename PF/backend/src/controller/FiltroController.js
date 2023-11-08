import { Router } from 'express';
import FiltroService from '../servicios/FiltrosService.js';

const router = Router();
const filtroserv = new FiltroService();

router.get('/:FkPaciente', async (req, res) => {
  console.log(`This is a get operation getEspecialidades`);
  const especialidades = await filtroserv.GetFiltroPaciente(req.params.FkPaciente);
  return res.status(200).json(especialidades);
});

router.get('/nombreMed/:FkMedico', async (req, res) => {
  console.log(`This is a get operation getEspecialidades`);
  const especialidades = await filtroserv.GetFiltroMedicos(req.params.FkMedico);
  return res.status(200).json(especialidades);
});


export default router;