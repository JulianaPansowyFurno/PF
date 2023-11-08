import sql from 'mssql'
import config from '../models/BD.js'
import 'dotenv/config'

export default class FiltroService {

    GetFiltroPaciente = async (idPaciente) => {
        console.log('This is a function on the service GetFiltroNombre');
        const pool = await sql.connect(config);
        const response = await pool.request()
          .input('FkPaciente',sql.Int, idPaciente)
          .query(`SELECT Turno.IdTurno, Sede.Sede, Turno.Fecha, Paciente.NombreApellido, Medico.NombreApellidoM , Turno.Cancelado, Turno.Asistio, Estudio.Estudio, Servicio.Servicio, Turno.Hora 
          FROM Turno 
          inner join Paciente on Paciente.IdPaciente = Turno.FkPaciente 
          inner join Sede on Sede.IdSede = Turno.FkSede
          inner join Medico on Medico.IdMedico = Turno.FkMedico
          inner join Estudio on Estudio.IdEstudio = Turno.FkEstudio
          inner join Servicio on Servicio.IdServicio = Turno.FkServicio
           WHERE FkPaciente = @FkPaciente`);
      
        console.log(response.recordset);
        return response.recordset;
    }

    
    GetFiltroMedicos = async (idMedico) => {
      console.log('This is a function on the service GetFiltroNombre');
      const pool = await sql.connect(config);
      const response = await pool.request()
        .input('FkMedico',sql.Int, idMedico)
        .query(`SELECT Turno.IdTurno, Sede.Sede, Turno.Fecha, Paciente.NombreApellido, Medico.NombreApellidoM , Turno.Cancelado, Turno.Asistio, Estudio.Estudio, Servicio.Servicio, Turno.Hora 
        FROM Turno 
        inner join Paciente on Paciente.IdPaciente = Turno.FkPaciente 
        inner join Sede on Sede.IdSede = Turno.FkSede
        inner join Medico on Medico.IdMedico = Turno.FkMedico
        inner join Estudio on Estudio.IdEstudio = Turno.FkEstudio
        inner join Servicio on Servicio.IdServicio = Turno.FkServicio
         WHERE FkMedico = @FkMedico`);
    
      console.log(response.recordset);
      return response.recordset;
  }
}