import { mockDeep } from "vitest-mock-extended";

import type db from "@/db";

const dbMock = mockDeep<typeof db>();

export default dbMock;
