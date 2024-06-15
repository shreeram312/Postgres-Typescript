// // Write a function to create a table

// import { Client } from "pg";

// async function insertData() {
//   const client = new Client({
//     connectionString:
//       "postgresql://neondb_owner:xgdFNrXR7I3M@ep-bitter-feather-a5bvattm.us-east-2.aws.neon.tech/neondb?sslmode=require",
//   });
//   await client.connect();
//   try {
//     const res = await client.query(`
//       INSERT INTO users (username,email,password)
//       VALUES ('A','aruna@gmail.com','87654321')
//     `);
//     console.log(res);
//   } catch (e) {
//     console.log(e);
//   } finally {
//     client.end();
//   }
// }

// async function getData(email: string) {
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

// getData("aruna@gmail.com");

// export {};
