// Write a function to create a table

import { Client } from "pg";

async function insertData() {
  const client = new Client({
    connectionString:
      "postgresql://neondb_owner:xgdFNrXR7I3M@ep-bitter-feather-a5bvattm.us-east-2.aws.neon.tech/neondb?sslmode=require",
  });
  await client.connect();

  const res = await client.query(`
      INSERT INTO users (username,email,password)
      VALUES ('SHREETEJA','shreeteja@gmail.com','87654321')
    `);
  console.log(res);
}

insertData();

export {};
