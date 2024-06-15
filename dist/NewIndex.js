"use strict";
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
function NewInsertData() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            connectionString: "postgresql://neondb_owner:xgdFNrXR7I3M@ep-bitter-feather-a5bvattm.us-east-2.aws.neon.tech/neondb?sslmode=require",
        });
        yield client.connect();
        try {
            yield client.query("BEGIN");
            const res = `INSERT INTO USERS (username, email, password) VALUES($1, $2, $3) RETURNING id`;
            const values = ["broNME", "bro@gmail.com", "brobro"];
            const finalRes = yield client.query(res, values);
            const uid = yield finalRes.rows[0].id;
            const innerAddress = `INSERT INTO ADDRESSES (user_id, city, country, street, pincode) VALUES($1, $2, $3, $4, $5)`;
            const values2 = [uid, "pune", "india", "somnathnagar", "411014"];
            yield client.query(innerAddress, values2);
            yield client.query("COMMIT");
            console.log("User and address inserted successfully");
            console.log(res);
        }
        catch (e) {
            yield client.query("ROLLBACK");
            console.log(e);
        }
        finally {
            yield client.end();
        }
    });
}
// async function NewgetData(email: string) {
//   const client = new Client({
//     connectionString:
//       "postgresql://neondb_owner:xgdFNrXR7I3M@ep-bitter-feather-a5bvattm.us-east-2.aws.neon.tech/neondb?sslmode=require",
//   });
//   await client.connect();
//   try {
//     const query = "SELECT * FROM USERS WHERE EMAIL = $1";
//     const values = [email];
//     const res = await client.query(query, values);
//     if (res.rows.length > 0) {
//       console.log(res.rows[0]);
//     } else {
//       console.log("Not found");
//     }
//   } catch (e) {
//     console.log(e);
//   } finally {
//     client.end();
//   }
// }
// NewgetData('abc@gmail.com')
NewInsertData();
