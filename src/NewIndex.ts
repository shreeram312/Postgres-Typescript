import { Client } from "pg";

async function NewInsertData() {
  const client = new Client({
    connectionString:
      "postgresql://neondb_owner:xgdFNrXR7I3M@ep-bitter-feather-a5bvattm.us-east-2.aws.neon.tech/neondb?sslmode=require",
  });
  await client.connect();
  try {
    await client.query("BEGIN");
    const res = `INSERT INTO USERS (username, email, password) VALUES($1, $2, $3) RETURNING id`;
    const values = ["broNME", "bro@gmail.com", "brobro"];
    const finalRes = await client.query(res, values);
    const uid = await finalRes.rows[0].id;

    const innerAddress = `INSERT INTO ADDRESSES (user_id, city, country, street, pincode) VALUES($1, $2, $3, $4, $5)`;
    const values2 = [uid, "pune", "india", "somnathnagar", "411014"];

    await client.query(innerAddress, values2);
    await client.query("COMMIT");
    console.log("User and address inserted successfully");
    console.log(res);
  } catch (e) {
    await client.query("ROLLBACK");
    console.log(e);
  } finally {
    await client.end();
  }
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
export {};
