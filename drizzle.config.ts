// import "dotenv/config";
// import type { Config } from "drizzle-kit";

// export default {
//   schema: "./src/db/schema.ts",
//   out: "./src/db/drizzle.ts",
//   driver: "pg",
//   dbCredentials: {
//     connectionString:
//       "postgresql://lingo_owner:5pE4cQOIhnvk@ep-long-smoke-a5k3fdjd.us-east-2.aws.neon.tech/lingo?sslmode=require"!,
//   },
// } satisfies Config;

import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql", // "mysql" | "sqlite" | "postgresql"
  schema: "./src/db/schema.ts",
  out: "./src/db/drizzle.ts",
  dbCredentials: {
    url:"postgresql://lingo_owner:5pE4cQOIhnvk@ep-long-smoke-a5k3fdjd.us-east-2.aws.neon.tech/lingo?sslmode=require"!,
  }
});
