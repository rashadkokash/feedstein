import { IUserSchema } from '../entities/user-schema';

export type InsertUserDTO = Omit<IUserSchema, '_id'>;
export type RegisterUserDTO = InsertUserDTO;

export interface IUserRepository {
  insert: (data: InsertUserDTO) => Promise<IUserSchema>;
  findByEmail: (email: string) => Promise<IUserSchema | undefined>;
}
