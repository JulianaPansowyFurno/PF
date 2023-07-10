import sql from 'mssql'
import config from '../models/BD.js'
import 'dotenv/config'

export default class PacienteService {
    CrearPaciente = async (usuario) => {
        console.log('This is a function on the service Create USuario');
            const pool = await sql.connect(config);
            const response = await pool.request()
            .input('NombreApellido',sql.NChar, usuario.nameandsur)
            .input('DNI',sql.Int, usuario.DNI)
            .input('CoberturaMedica',sql.NChar, usuario.medicalcover)
            .input('Mail',sql.NChar, usuario.email)
            .input('Telefono',sql.Int, usuario.cel)
            .input('FechaNacimiento',sql.Date, usuario.birth)
            .query(`INSERT INTO Paciente (NombreApellido, DNI, CoberturaMedica, Mail, Telefono, FechaNacimiento) VALUES (@NombreApellido, @DNI, @CoberturaMedica, @Mail, @Telefono, @FechaNacimiento)`);
            console.log(response)
            // {
            //     "nameandsur": "JulianPan",
            //     "DNI": "47350201",
            //     "medicalcover": "OSDE",
            //     "email": "juli@pura.com",
            //     "cel": "1150276669",
            //     "birth": "2006-04-10"
            // }
        return response.recordset;
    }
}