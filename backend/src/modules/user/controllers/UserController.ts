import { Request, Response } from "express";
import UserService from "../services/UserService";

class UserController {
  public async createOrLogin(request: Request, response: Response) {
    const { email } = request.body;
    const userService = new UserService();
    const user = await userService.createOrLoginUser({ email });

    response.json(user);
  }
}

export default UserController;
