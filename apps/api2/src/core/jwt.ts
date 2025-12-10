import jwt from "@elysiajs/jwt";
import { env } from "./env";

export const jwtPlugin = jwt({
  name: "jwt",
  secret: env.JWT_SECRET,
  exp: "1h",
});
