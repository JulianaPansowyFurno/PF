import { Router } from 'express';
import MedicosService from '../servicios/MedicosService.js';

const router = Router();
const medController = new MedicosService();

router.get('/getAll', async (req, res) => {
  console.log(`This is a get operation getEspecialidades`);
  const especialidades = await medController.GetAllMedicos();

  return res.status(200).json(especialidades);
});

router.get('', async (req, res) => {
  console.log(`This is a get operation GET mediCOOOOOOOOOOOOOOOOOOOOS`);
  const sedes = await medController.GetTurnosMedico();

  return res.status(200).json(sedes);
});

router.get('/dias', async (req, res) => {
    console.log(`This is a get operation GET mediCOOOOOOOOOOOOOOOOOOOOS`);
    const dias = await medController.TraerDiasLaborales();

    console.log(dias.id)

  
    return res.status(200).json(dias);
});

router.post('', async (req, res) => {
    console.log(`This is a get operation create`);
  
    console.log(`This is a get operation vrearrrrr mediCOOOOOOOOOOOOOOOOOOOOS`);
    const sedes = await medController.CrearMedico(req.body);
    return res.status(200).json(sedes);
    
});

router.post('/insertardias', async (req, res) => {
  console.log(`This is a get operation create`);
  const DiasLaborales = await medController.InsertDiasLaborales(req.body);
  return res.status(200).json(DiasLaborales);
});


export default router;