import {
  InsertUserDTO,
  IUserSchema,
  RegisterUserDTO,
} from '@feedstein/api-interfaces';
import { hashString } from '@feedstein/utils';

import UserRepository from '../repositories/user-repository';

export class UserService {
  async isEmailAlreadyUsed(email: string): Promise<boolean> {
    const user = await UserRepository.findByEmail(email);
    return Boolean(user);
  }

  async registerUser(data: RegisterUserDTO): Promise<IUserSchema> {
    const userDTO: InsertUserDTO = {
      email: data.email,
      password: await hashString(data.password),
    };

    const user = await UserRepository.insert(userDTO);
    delete user.password;
    return user;
  }
}

export default new UserService();
