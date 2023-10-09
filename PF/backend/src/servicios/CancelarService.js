import sql from 'mssql'
import config from '../models/BD.js'
import 'dotenv/config'

export default class CancelarService {

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
