import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://lingo_owner:5pE4cQOIhnvk@ep-long-smoke-a5k3fdjd.us-east-2.aws.neon.tech/lingo?sslmode=require"!
);
const db = drizzle(sql, { schema });

export default db;
