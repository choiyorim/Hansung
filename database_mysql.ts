import * as mysql from 'mysql';

export module mydatabase{
    export const con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password:'111111',
        database:'o2'
    });
}