import { Elysia } from "elysia";
import { AuthService } from "./auth.service";
import { loginSchema, registerSchema } from "./auth.schema";
import {jwtPlugin} from "../../core/jwt";

export const authController = new Elysia({ prefix: "/auth" })
  .use(jwtPlugin)
  .post(
    "/register",
    async ({ body }) => {
      const service = new AuthService();
      return service.register(body);
    },
    { body: registerSchema }
  )
  .post(
    "/login",
    async ({ body, jwt }) => {
      const service = new AuthService();
      const user = await service.login(body);

      const token = await jwt.sign({
        id: user.id,
        email: user.email,
      });

      return { token };
    },
    { body: loginSchema }
  );
