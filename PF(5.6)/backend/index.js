import express from "express";
import TurnosRouter from "./src/controller/TurnosController.js";
import sql from 'mssql'

const app = express();
const port = 5000;

//http://localhost:5000/turno
app.use(express.json());

app.use("/turno", TurnosRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});