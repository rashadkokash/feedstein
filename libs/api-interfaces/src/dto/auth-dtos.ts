import { InsertUserDTO } from '../repositories/user-repository';

export type RegisterUserDTO = Pick<InsertUserDTO, 'email' | 'password'>;
