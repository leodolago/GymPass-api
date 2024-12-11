import { PrismaClient } from "@prisma/client";
import fastify from "fastify";

export const app = fastify()

const prisma = new PrismaClient()

prisma.user.create({
  data: {
    name: "Leonardo Lago",
    email: "leonardo@gmail.com",
  },
})