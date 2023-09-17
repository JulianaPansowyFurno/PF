import sql from 'mssql'
import config from '../models/BD.js'
import 'dotenv/config'

export default class UsuarioService {

    getUsuario = async (user, pass) => {
        console.log('This is a function on the service getUsuarios');   
        const pool = await sql.connect(config);
        const response = await pool.request()
        .input('Usuarios',sql.NChar, user)
        .input('Contraseña',sql.NChar, pass)
        .query(`SELECT COUNT(*) as cantidad FROM Usuario WHERE Usuarios = @Usuarios AND Contraseña = @Contraseña`);
        console.log(response.recordset[0].cantidad);
        if(response.recordset[0].cantidad == 1)
        {
            console.log(
                "Existe el usurio")
            return true;
        }
        else{
            console.log("No existe")
            return false;
        }
    }

    CrearUsuario = async (usuario) => {
        console.log('This is a function on the service CrearUsuario');
        const pool = await sql.connect(config);

        // Vamos a validar que ese usuario no exista
        const user = await pool.request()
        .input('Usuarios',sql.NChar, usuario.user)
        .query(`SELECT COUNT(*) as cantidad FROM Usuario WHERE Usuarios = @Usuarios`);
        
        const cantidad = user.recordset[0].cantidad

        if (cantidad == 0) {
            const response = await pool.request()
                .input('Usuarios',sql.NChar, usuario.user)
                .input('Contraseña',sql.NChar, usuario.pass)
                .input('FKRol',sql.Int, 2)
                .query(`INSERT INTO Usuario (Usuarios, Contraseña, FKRol) VALUES (@Usuarios, @Contraseña, @FKRol); SELECT SCOPE_IDENTITY() AS id;`);
            return response.recordset[0];
        } else { 
            // El usuario ya existe
            return 0;
        }
       
    }
    DeleteUsuario = async (IdUsuario) => {
        console.log('This is a function on the service DeleteUsuario');
        const pool = await sql.connect(config);
        const response = await pool.request()
        .input('IdUsuario',sql.Int, IdUsuario)
        .query(`DELETE FROM Usuario WHERE IdUsuario = @IdUsuario`);

        console.log(response)
        return response.recordset;
    }
}