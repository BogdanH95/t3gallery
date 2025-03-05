import { NodePgDatabase, drizzle } from "drizzle-orm/node-postgres";
import pkg from "pg";
const { Client } = pkg;
import * as schema from "./schema";

export const client = new Client({
  connectionString: "postgres://019562ab-0912-7e7e-83d3-87895d36be61:439c00ee-4891-402d-86eb-4dfb000026ba@eu-central-1.db.thenile.dev/home_postgres",
});

await client.connect();

// check the connection
const res = await client.query("SELECT $1::text as message", [
  "Client connected to Nile",
]);
console.log(res.rows[0].message);

export const db = drizzle(client, { schema, logger: true });