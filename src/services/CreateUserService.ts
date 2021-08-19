import { getCustomRepository } from "typeorm";
import { UserRepository } from "@repositories/UserRepository";
import { ApplicationException } from "@exceptions/ApplicationException";

interface IUserRequest {
  name: string;
  email: string;
}

class CreateUserService {
  async execute({ name, email }: IUserRequest) {
    const usersRepository = getCustomRepository(UserRepository);

    if (!name || !email) {
      throw new ApplicationException("Email or password with bad formated", 400);
    }

    const userAlreadyExists = await usersRepository.findOne({
      email
    });

    if (userAlreadyExists) {
      throw new ApplicationException("User already registered", 403);
    }

    const user = usersRepository.create({
      name,
      email
    });

    await usersRepository.save(user);

    return user;
  }
}

export { CreateUserService };
