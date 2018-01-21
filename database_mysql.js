"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
var mydatabase;
(function (mydatabase) {
    mydatabase.con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '111111',
        database: 'o2'
    });
})(mydatabase = exports.mydatabase || (exports.mydatabase = {}));
//# sourceMappingURL=database_mysql.js.map