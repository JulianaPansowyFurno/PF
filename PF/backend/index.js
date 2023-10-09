import express from "express";
import TurnosRouter from "./src/controller/TurnosController.js";
import LogInRouter from "./src/controller/UsuarioController.js";
import PacienteRouter from "./src/controller/PacienteController.js";
import EspecialidadRouter from "./src/controller/EspecialidadController.js";
import CancelarRouter from "./src/controller/CancelarController.js";
import SedeRouter from "./src/controller/SedeController.js";
import cors from 'cors';
import sql from 'mssql'
import 'dotenv/config'

const app = express();
const port = 5000;

//http://localhost:3000/turno?id=2
app.use(express.json());
app.use(cors());

app.use("/turno", TurnosRouter);
app.use("/usuario", LogInRouter);
app.use("/paciente", PacienteRouter);
app.use("/especialidad", EspecialidadRouter);
app.use("/cancelar", CancelarRouter);
app.use("/sede", SedeRouter);


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});