import { NextFunction, Request, Response } from "express";
import UserService from "../services/UserService";
import { handleAsyncErrors } from "../../../shared/error/handleAsyncErrors";

class UserController {
  public createOrLogin = handleAsyncErrors(
    async (request: Request, response: Response, next: NextFunction) => {
      const { email } = request.body;
      const userService = new UserService();
      const user = await userService.createOrLoginUser({ email });

      response.status(200).json(user);
    }
  );
}

export default UserController;
