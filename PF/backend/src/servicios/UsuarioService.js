import sql from 'mssql'
import config from '../models/BD.js'
import 'dotenv/config'

export default class UsuarioService {

    getUsuario = async (NombreApellido, Contraseña) => {
        console.log('This is a function on the service getUsuarios');
        console.log(NombreApellido)
        console.log(Contraseña)    
        const pool = await sql.connect(config);
        const response = await pool.request()
        .input('NombreApellido',sql.NChar, NombreApellido)
        .input('Contraseña',sql.NChar, Contraseña)
        .query(`SELECT COUNT(*) as cantidad FROM Usuario WHERE NombreApellido = @NombreApellido AND Contraseña = @Contraseña`);
        console.log(response.recordset[0].cantidad);
        if(response.recordset[0].cantidad == 1)
        {
            console.log("Existe el usurio")
        }
        else{
            console.log("No existe")
        }
        console.log(response.recordset)

        return response.recordset;
    }

    CrearUsuario = async (usuario) => {
        console.log('This is a function on the service Create USuario');
            const pool = await sql.connect(config);
            const response = await pool.request()
            .input('NombreApellido',sql.NChar, usuario.NombreApellido)
            .input('Contraseña',sql.NChar, usuario.Contraseña)
            .input('FKRol',sql.Int, usuario.FkRol)
            .query(`INSERT INTO Usuario (NombreApellido, Contraseña, FKRol) VALUES (@NombreApellido, @Contraseña, @FKRol)`);
            console.log(response)
            /*{
                "NombreApellido": "Uriel Strauss",
                "Contraseña": "Uri1234",
                "FkRol": 2
            }*/
        return response.recordset;
    }


    
    
}