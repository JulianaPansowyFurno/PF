import express from "express";
import TurnosRouter from "./src/controller/TurnosController.js";
import UsuarioRouter from "./src/controller/UsuarioController.js";
import PacienteRouter from "./src/controller/PacienteController.js";
import cors from 'cors';
import sql from 'mssql'
import 'dotenv/config'

const app = express();
const port = 5000;

//http://localhost:3000/turno?id=2
app.use(express.json());
app.use(cors());

app.use("/turno", TurnosRouter);
app.use("/usuario", UsuarioRouter);
app.use("/paciente", PacienteRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});