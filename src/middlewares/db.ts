import { createMiddleware } from "hono/factory";

import type { AppBindings } from "@/lib/types";

import env from "@/env";

export const dbMiddleware = createMiddleware<AppBindings>(async (c, next) => {
  if (env.NODE_ENV !== "test") {
    const { default: db } = await import("@/db");
    c.set("db", db);
  }
  await next();
});
