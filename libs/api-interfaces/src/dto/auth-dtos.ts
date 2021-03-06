import { InsertUserDTO } from '../repositories/user-repository';

export type RegisterUserDTO = Pick<InsertUserDTO, 'email' | 'password'>;
export type ActivateEmailDTO = {
  token: string;
};
