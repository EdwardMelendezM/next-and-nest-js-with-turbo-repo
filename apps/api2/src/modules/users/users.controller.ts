import { Elysia } from "elysia";
import { UsersService } from "./users.service";
import { updateUserSchema } from "./users.schema";

export const usersController = new Elysia({ prefix: "/users" })
  .get("/", async () => {
    const service = new UsersService();
    return service.findAll();
  })
  .patch(
    "/:id",
    async ({ params, body }) => {
      const service = new UsersService();
      return service.update(Number(params.id), body);
    },
    { body: updateUserSchema }
  );
