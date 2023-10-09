import sql from 'mssql'
import config from '../models/BD.js'
import 'dotenv/config'

export default class TurnosService {

    getTurnosById = async (id) => {
        console.log('This is a function on the service getTurnos');
        console.log(id)
        const pool = await sql.connect(config);
        const response = await pool.request()
        .input('FKPaciente',sql.Int, id)
        .query(`SELECT Turno.IdTurno, Sede.Sede, Turno.Fecha, Paciente.NombreApellido, Medico.NombreApellidoM , Turno.Cancelado, Turno.Asistio, Estudio.Estudio, Servicio.Servicio, Turno.Hora 
        FROM Turno 
        inner join Paciente on Paciente.IdPaciente = Turno.FkPaciente 
        inner join Sede on Sede.IdSede = Turno.FkSede
        inner join Medico on Medico.IdMedico = Turno.FkMedico
        inner join Estudio on Estudio.IdEstudio = Turno.FkEstudio
        inner join Servicio on Servicio.IdServicio = Turno.FkServicio
        WHERE Turno.FkPaciente = @FkPaciente`);
    
        console.log(response.recordset)
        return response.recordset;
    }

    

    sacarTurno = async (turno) => {
        console.log('This is a function on the service');
            const pool = await sql.connect(config);
            const response = await pool.request()
                .input('FkSede',sql.Int, turno.FkSede)
                .input('Fecha',sql.NChar, turno.Fecha)
                .input('Hora',sql.NChar, turno.Hora)
                .input('FkPaciente',sql.Int, turno.FkPaciente)
                .input('FkMedico',sql.Int, turno.FkMedico)
                .input('Cancelado',sql.Bit, turno.Cancelado)
                .input('Asistio',sql.Bit, turno.Asistio)
                .input('FkEstudio',sql.Int, turno.FkEstudio)
                .input('FkServicio',sql.Int, turno.FkServicio)
                .query(`INSERT INTO Turno (FkSede, Fecha, Hora, FkPaciente, FkMedico, Cancelado, Asistio, FkEstudio, FkServicio) VALUES (@FkSede, @Fecha, @Hora, @FkPaciente, @FkMedico, @Cancelado, @Asistio, @FkEstudio, @FkServicio)`);
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

    //FUNCIONA
    PosponerTurno = async (turno) => {
        console.log('This is a function on the service test');
            const pool = await sql.connect(config);
            const response = await pool.request()
                .input('IdTurno',sql.Int, turno.IdTurno)
                .input('Fecha',sql.NChar, turno.Fecha)
                .query(`UPDATE Turno SET Fecha = @Fecha WHERE IdTurno = @IdTurno`);
            console.log(response)
            
        return response.recordset;
    }

    getEstudio = async (id) => {
        console.log('This is a function on the service getEstudio', id);
        const pool = await sql.connect(config);
        const response = await pool.request()
        .input('IdEspecialidad',sql.Int, id)
        .query(`SELECT Estudio.*
            FROM Estudio 
            inner join Especialidad on Especialidad.IdEspecialidad = Estudio.FkEspecialidad
            Where Estudio.FKEspecialidad = @IdEspecialidad`);
        console.log(response.recordset)
        return response.recordset;
    }

    cancelarTurno = async (id) => {
        console.log('This is a function on the service cancelar turn');
        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('IdTurno',sql.Int, id)
            .query(`UPDATE Turno SET Turno.Cancelado = 1 WHERE Turno.IdTurno = @IdTurno`);
        console.log(response)

        return response.recordset;
    }

    
}
