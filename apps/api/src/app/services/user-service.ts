import * as moment from 'moment';

import {
  ActivateEmailDTO,
  InsertUserDTO,
  IUserSchema,
  RegisterUserDTO,
} from '@feedstein/api-interfaces';
import { getRandomString, hashString } from '@feedstein/utils';

import UserRepository from '../repositories/user-repository';
import Events, { EventType } from '../events/pub-sub';
import { RegisterUserEvent } from '../events/auth-events';
import { ACTIVATION_EMAIL_TTL } from '../constants';

export class UserService {
  async isEmailAlreadyUsed(email: string): Promise<boolean> {
    const user = await UserRepository.findByEmail(email);
    return Boolean(user);
  }

  async registerUser(data: RegisterUserDTO): Promise<IUserSchema> {
    const activationToken = getRandomString();
    const activationTokenExpiresAt = moment()
      .add(ACTIVATION_EMAIL_TTL, 'milliseconds')
      .toDate();

    const userDTO: InsertUserDTO = {
      email: data.email,
      password: await hashString(data.password),
      active: false,
      activationToken,
      activationTokenExpiresAt,
    };

    const user = await UserRepository.insert(userDTO);

    Events.emit(EventType.REGISTER, new RegisterUserEvent(user));

    delete user.password;
    delete user.activationToken;
    delete user.activationTokenExpiresAt;
    return user;
  }

  activateEmail(data: ActivateEmailDTO): Promise<boolean> {
    return UserRepository.activateUserByToken(data.token);
  }
}

export default new UserService();
