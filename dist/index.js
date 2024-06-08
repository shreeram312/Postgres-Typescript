"use strict";
// Write a function to create a table
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
function insertData() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            connectionString: "postgresql://neondb_owner:xgdFNrXR7I3M@ep-bitter-feather-a5bvattm.us-east-2.aws.neon.tech/neondb?sslmode=require",
        });
        yield client.connect();
        try {
            const res = yield client.query(`
      INSERT INTO users (username,email,password)
      VALUES ('A','aruna@gmail.com','87654321')
    `);
            console.log(res);
        }
        catch (e) {
            console.log(e);
        }
        finally {
            client.end();
        }
    });
}
function getData(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            connectionString: "postgresql://neondb_owner:xgdFNrXR7I3M@ep-bitter-feather-a5bvattm.us-east-2.aws.neon.tech/neondb?sslmode=require",
        });
        yield client.connect();
        try {
            const query = "SELECT * FROM USERS WHERE EMAIL = $1";
            const values = [email];
            const res = yield client.query(query, values);
            if (res.rows.length > 0) {
                console.log(res.rows[0]);
            }
            else {
                console.log("Not found");
            }
        }
        catch (e) {
            console.log(e);
        }
        finally {
            client.end();
        }
    });
}
getData("aruna@gmail.com");
