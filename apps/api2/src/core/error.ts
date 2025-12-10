import { Elysia } from "elysia";

export const errorHandler = () =>
  (app: Elysia) =>
    app.onError(({ code, error, set }) => {
      console.error(error);

      return {
        status: "error",
        message: error
      };
    });
