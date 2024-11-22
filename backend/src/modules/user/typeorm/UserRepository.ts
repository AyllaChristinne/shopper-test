import { AppDataSource } from "../../../shared/typeorm/data-source";
import User from "./UserEntity";

export const UserRepository = AppDataSource.getRepository(User).extend({
  async findById(id: string) {
    return this.createQueryBuilder("user")
      .where("user.id = :id", { id })
      .getOne();
  },

  async findByEmail(email: string) {
    return this.createQueryBuilder("user")
      .where("user.email = :email", { email })
      .getOne();
  },
});
