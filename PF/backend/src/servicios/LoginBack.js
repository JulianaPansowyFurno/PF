import sql from 'mssql'
import config from '../models/BD.js'
import 'dotenv/config'


export default class TurnosServices {

    getTurnos = async () => {
        // console.log('This is a function on the service getTurnos');

        // const pool = await sql.connect(config);
        // const response = await pool.request().query(`SELECT * from Turno`);
        // console.log(response)

        // return response.recordset;
    }
}