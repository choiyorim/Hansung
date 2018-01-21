"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mydatabase = require("../../../database_mysql");
const con = mydatabase.mydatabase.con;
con.connect();
class Test {
    constructor() {
    }
    createName(email, pass) {
        var sql = 'INSERT INTO yorim (email,pass) VALUES ("?","?")';
        var params = [email, pass];
        con.query(sql, params, function (err, rows, fields) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(rows);
            }
        });
    }
    updateName(email, changEmail) {
        return __awaiter(this, void 0, void 0, function* () {
            var sql = 'UPDATE yorim SET email=("?") WHERE email =("?")';
            var params = [changEmail, email];
            yield con.query(sql, params, function (err, rows, fields) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(rows);
                }
            });
        });
    }
    deleteName(email) {
        return __awaiter(this, void 0, void 0, function* () {
            var sql = 'DELETE FROM yorim WHERE email= ("?")';
            var params = [email];
            yield con.query(sql, params, function (err, rows, fields) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(rows);
                }
            });
        });
    }
}
exports.Test = Test;
exports.test = new Test();
//# sourceMappingURL=test.model.js.map