import sql from 'mssql'
import config from '../models/BD.js'
import 'dotenv/config'

export default class UsuarioService {

    getUsuario = async (usuario, Contraseña) => {
        console.log('This is a function on the service getUsuarios');   
        const pool = await sql.connect(config);
        const response = await pool.request()
        .input('Usuarios',sql.NChar, usuario)
        .input('Contraseña',sql.NChar, Contraseña)
        .query(`SELECT COUNT(*) as cantidad FROM Usuario WHERE Usuarios = @Usuarios AND Contraseña = @Contraseña`);
        console.log(response.recordset[0].cantidad);
        if(response.recordset[0].cantidad == 1)
        {
            console.log("Existe el usurio")
            return true;
        }
        else{
            return false;
            console.log("No existe")
        }
        
        return response.recordset;
    }

    CrearUsuario = async (usuario) => {
        console.log('This is a function on the service Create USuario');
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
}