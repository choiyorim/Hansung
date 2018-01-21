import * as mydatabase from '../../../database_mysql';
const con=mydatabase.mydatabase.con;
con.connect();
export class Test {
	constructor() {
	}

	 createName(email: any, pass: any) {
                 var sql = 'INSERT INTO yorim (email,pass) VALUES ?';
                 var params = [email,pass];
                 con.query(sql, params, function (err, rows, fields) {
                     if (err) {
                         console.log(err);
                     }
                     else {
                         console.log(rows);
                     }
        });
    }


	 updateName(email: any, changEmail: any) {
        var sql = 'UPDATE yorim SET email=("?") WHERE email =("?")';
        var params = [changEmail,email];
         con.query(sql, params, function (err, rows, fields) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(rows);
            }
		});
    }


	 deleteName(email:any) {
        var sql = 'DELETE FROM yorim WHERE email= ("?")';
        var params =[email];
         con.query(sql,params,function(err,rows,fields) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(rows);
            }
        });
         }

}

export const test: any = new Test();