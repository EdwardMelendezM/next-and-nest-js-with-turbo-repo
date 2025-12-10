import { Elysia } from "elysia";
import { errorHandler } from "./core/error";
import { env } from "./core/env";

import { authController } from "./modules/auth/auth.controller";
import { usersController } from "./modules/users/users.controller";
import {jwtPlugin} from "./core/jwt";

const app = new Elysia()
  .use(jwtPlugin)
  .use(errorHandler())

  .use(authController)

  // protected routes:
  .guard(
    {
      beforeHandle: async ({ jwt, set, request }) => {
        const authHeader = request.headers.get("authorization");
        const tokenString = authHeader?.replace("Bearer ", "");

        const token = await jwt.verify(tokenString || "");

        if (!token) {
          set.status = 401;
          return "Unauthorized";
        }
      },
    },
    (app) => app.use(usersController)
  )

  .listen(env.PORT);

console.log(`🚀 Server running on http://localhost:${env.PORT}`);
