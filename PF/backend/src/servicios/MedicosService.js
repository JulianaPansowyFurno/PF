import sql from 'mssql'
import config from '../models/BD.js'
import 'dotenv/config'

export default class MedicosService {

    GetDiasDisponibles  = async (id) => {
        console.log('This is a function on the service getTurnos medivossss');
        const pool = await sql.connect(config);
        const response = await pool.request()
        .input('IdMedico',sql.Int, id)
        .query(`SELECT DiasLaborales.* FROM DiasLaborales 
        inner join Medico on Medico.FkDiasLaborales = DiasLaborales.IdDiasLaborales WHERE Medico.IdMedico = @IdMedico `);
        console.log(response.recordset)
        return response.recordset;
    }

    GetAllMedicos  = async () => {
        console.log('This is a function on the service getTurnos medivossss');
        const pool = await sql.connect(config);
        const response = await pool.request()
        .query(`SELECT * FROM Medico`);
        console.log(response.recordset)
        return response.recordset;
    }

    getMedico = async (Genero, Especialidad) => {
        const pool = await sql.connect(config);
        const response = await pool.request()
        .input('Genero',sql.NChar, Genero)
        .input('FkEspecialidad',sql.Int, Especialidad)
        .query(`SELECT *
            FROM Medico 
            Where Medico.Genero = @Genero AND Medico.FkEspecialidad = @FkEspecialidad`);
        console.log(response.recordset)
        return response.recordset;
    }


    GetTurnosMedico  = async () => {
        console.log('This is a function on the service getTurnos medivossss');
        const pool = await sql.connect(config);
        const response = await pool.request()
        .query(`SELECT Turno.IdTurno, Sede.Sede, Turno.Fecha, Paciente.NombreApellido, Medico.NombreApellidoM 
        , Turno.Cancelado, Turno.Asistio, Estudio.Estudio, Especialidad.Especialidad, Turno.Hora 
        FROM Turno 
        inner join Paciente on Paciente.IdPaciente = Turno.FkPaciente 
        inner join Sede on Sede.IdSede = Turno.FkSede
        inner join Medico on Medico.IdMedico = Turno.FkMedico
        inner join Estudio on Estudio.IdEstudio = Turno.FkEstudio
        inner join Especialidad on Especialidad.IdEspecialidad= Turno.FkEspecialidad
        Order by Turno.Hora`);
    
        console.log(response.recordset)
        return response.recordset;
    }

    CrearMedico  = async (medico) => {
        console.log('This is a function on the service crearMedico');
        const pool = await sql.connect(config);

        // Vamos a validar que ese usuario no exista
        const user = await pool.request()
        .input('NombreApellidoM', sql.NChar, medico.nombreApellidoM)
        .query(`SELECT COUNT(*) as cantidad FROM Medico WHERE NombreApellidoM = @NombreApellidoM`);
        
        
        const cantidad = user.recordset[0].cantidad
        
        if (cantidad == 0) {
            const response = await pool.request()
                .input('NombreApellidoM',sql.NChar, medico.nombre)
                .input('FkEspecialidad',sql.Int, medico.esp)
                .input('Mail',sql.NChar, medico.mail)
                .input('Telefono',sql.Int, medico.telefono)
                .input('FkDiasLaborales',sql.Int, medico.DiasLaborales)
                .input('Genero',sql.NChar, medico.Genero)
                .query(`INSERT INTO Medico (NombreApellidoM, FkEspecialidad, Mail, Telefono, FkDiasLaborales, Genero) VALUES (@NombreApellidoM, @FkEspecialidad, @Mail, @Telefono, @FkDiasLaborales, @Genero)`);
            return response.recordset;
        
        } else { 
            return 0;
        }
    }



    InsertDiasLaborales = async (diasLaborales) => {
        console.log('This is a function to insert DiasLaborales');
        const pool = await sql.connect(config);
        console.log()
        const response = await pool.request()
            .input('Lunes', sql.Bit, diasLaborales.lunes)
            .input('Martes', sql.Bit, diasLaborales.martes)
            .input('Miercoles', sql.Bit, diasLaborales.miercoles)
            .input('Jueves', sql.Bit, diasLaborales.jueves)
            .input('Viernes', sql.Bit, diasLaborales.viernes)
            .input('Sabado', sql.Bit, diasLaborales.sabado)
            .query(`INSERT INTO DiasLaborales (Lunes, Martes, Miercoles, Jueves, Viernes, Sabado)
            VALUES (@lunes, @martes, @miercoles, @jueves, @viernes, @sabado); SELECT SCOPE_IDENTITY() AS id;`);
        
        return response.recordset;
    }


    
}