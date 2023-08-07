import sql from 'mssql'
import config from '../models/BD.js'
import 'dotenv/config'

export default class PacienteService {
    CrearPaciente = async (usuario, idUsuario) => {
        console.log('This is a function on the service Create Usuario');
            const pool = await sql.connect(config);
            const response = await pool.request()
            .input('NombreApellido',sql.NChar, usuario.nameandsur)
            .input('DNI',sql.Int, usuario.DNI)
            .input('CoberturaMedica',sql.NChar, usuario.medicalcover)
            .input('Mail',sql.NChar, usuario.email)
            .input('Telefono',sql.Int, usuario.cel)
            .input('FechaNacimiento',sql.Date, usuario.birth)
            .input('FkUsuarioPaciente',sql.Int, idUsuario)
            .query(`INSERT INTO Paciente (NombreApellido, DNI, CoberturaMedica, Mail, Telefono, FechaNacimiento, FkUsuarioPaciente) VALUES (@NombreApellido, @DNI, @CoberturaMedica, @Mail, @Telefono, @FechaNacimiento, @FkUsuarioPaciente)`);
        return response.recordset;
    }
}