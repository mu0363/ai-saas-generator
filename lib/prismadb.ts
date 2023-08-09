import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

const prismadb = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalThis.prisma = prismadb;

export default prismadb;

/**
 * the way next.js 13 does reloading. it basically there is a chance that you have a lot of prisma clients initialized every time you hot reload every time you change something in your code.
 * so this way we assign that in  not in production so in development we assign this to globalThis.
 * that way it's not affected by hot reload and you don't get that warning in your console that there are multiple prisma client instances active.
 */
