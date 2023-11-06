import sql from 'mssql'
import config from '../models/BD.js'
import 'dotenv/config'

export default class FiltroService {

    GetMedicoNombre = async (NombreApellidoM) => {
        console.log('This is a function on the service GetMedicoNombre');
        const pool = await sql.connect(config);
        const response = await pool
          .request()
          .input('NombreApellidoM', sql.NVarChar, `%${NombreApellidoM}%`)
          .query('SELECT * FROM Medico WHERE NombreApellidoM LIKE @NombreApellidoM');
      
        console.log(response.recordset);
        return response.recordset;
    }
}