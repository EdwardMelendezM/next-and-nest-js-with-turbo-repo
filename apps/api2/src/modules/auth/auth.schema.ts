import { t } from "elysia";

export const registerSchema = t.Object({
  email: t.String({ format: "email" }),
  password: t.String({ minLength: 6 }),
});

export const loginSchema = registerSchema;
