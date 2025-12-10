import { t } from "elysia";

export const updateUserSchema = t.Object({
  email: t.Optional(t.String({ format: "email" })),
});
