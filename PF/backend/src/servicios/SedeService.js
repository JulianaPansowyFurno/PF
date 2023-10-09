import sql from 'mssql'
import config from '../models/BD.js'
import 'dotenv/config'

export default class SedeService {
    GetSede = async () => {
        console.log('This is a function on the service getESpecialidades');
        const pool = await sql.connect(config);
        const response = await pool.request()
        .query(`SELECT * FROM Sede`);
        console.log(response.recordset)
        return response.recordset;
    }
}