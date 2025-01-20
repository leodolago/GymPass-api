import { FastifyInstance } from "fastify";
import { register } from "./controleers/register";
import { authenticate } from "./controleers/authenticate";
import { profile } from "./controleers/profile";
import { verifyJWT } from "./middlewares/verify-jwt";

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', register)
  app.post('/sessions', authenticate)

  //** Authenticated */
  app.get('/me', {onRequest: [verifyJWT] } , profile)
}