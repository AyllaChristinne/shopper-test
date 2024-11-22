import User from "../typeorm/UserEntity";
import { UserRepository } from "../typeorm/UserRepository";

interface IRequest {
  email: string;
}

class UserService {
  public async createOrLoginUser({ email }: IRequest): Promise<User> {
    let user = await UserRepository.findByEmail(email);

    if (!user) {
      user = UserRepository.create({ email });
      await UserRepository.save(user);
    }

    return user;
  }
}

export default UserService;
