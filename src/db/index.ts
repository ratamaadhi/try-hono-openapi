// import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from 'ws';

import env from "@/env";

import * as schema from "./schema";

// const sql = neon(env.DATABASE_URL!);
const db = drizzle({
  connection: env.DATABASE_URL!,
  schema: schema,
  ws: ws,
});
export default db;
