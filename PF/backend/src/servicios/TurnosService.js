import sql from 'mssql'
import config from '../models/BD.js'
import 'dotenv/config'

export default class TurnosService {

    getTurnosById = async (id) => {
        console.log('This is a function on the service getTurnos');
        console.log(id)
        const pool = await sql.connect(config);
        const response = await pool.request()
        .input('IdTurno',sql.Int, id)
        .query(`SELECT * FROM Turno WHERE Turno.IdTurno = @IdTurno`);
    
        console.log(response.recordset)
        return response.recordset;
    }

    sacarTurno = async (turno) => {
        console.log('This is a function on the service');
            const pool = await sql.connect(config);
            const response = await pool.request()
                .input('FkSede',sql.Int, turno.FkSede)
                .input('FechaYHora',sql.NChar, turno.FechaYHora)
                .input('FkPaciente',sql.Int, turno.FkPaciente)
                .input('FkMedico',sql.Int, turno.FkMedico)
                .input('Estado',sql.Bit, turno.Estado)
                .input('Asistio',sql.Bit, turno.Asistio)
                .input('FkEstudio',sql.Int, turno.FkEstudio)
                .input('FkServicio',sql.Int, turno.FkServicio)
                .query(`INSERT INTO Turno (FkSede, FechaYHora, FkPaciente, FkMedico, Estado, Asistio, FkEstudio, FkServicio) VALUES (@FkSede, @FechaYHora, @FkPaciente, @FkMedico, @Estado, @Asistio, @FkEstudio, @FkServicio)`);
            console.log(response)
            /*{
                "FkSede": 2,
                "FechaYHora": "2022/06/10",
                "FkPaciente": 3,
                "FkMedico": 1,
                "Estado": true,
                "Asistio": true,
                "FkEstudio": 3,
                "FkServicio": 2
            }*/
        return response.recordset;
    }
    cancelarTurno = async (id, turno) => {
        console.log('This is a function on the service');
        const pool = await sql.connect(config);
        console.log(turno.Estado)
        const response = await pool.request()
        .input('IdTurno',sql.Int, id)
        .input('Estado',sql.Bit, turno.Estado)
        .query(`UPDATE Turno SET Turno.Estado = @Estado WHERE Turno.IdTurno = @IdTurno`);
        console.log(response)

        return response.recordset;
    }

    
}
