import sql from 'mssql'
import config from '../models/BD.js'
import 'dotenv/config'

export default class UsuarioService {

    getUsuario = async (usuario, contraseña) => {
        console.log('This is a function on the service getTurnos');

        const pool = await sql.connect(config);
        const response = await pool.request()
        .input('NombreApellido',sql.Int, usuario)
        .input('Contraseña',sql.Int, contraseña)
        .query(`SELECT COUNT(*) FROM Usuario WHERE Usuario.NombreApellido = usuario AND Usuario.Contraseña = contraseña`);
        if(response ==1)
        {
            console.log("Existe el usurio")
        }
        else{
            console.log("No existe")
        }
        console.log(response)

        return response.recordset;
    }
}