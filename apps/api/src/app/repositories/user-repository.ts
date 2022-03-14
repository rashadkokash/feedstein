import {
  IUserRepository,
  InsertUserDTO,
  IUserSchema,
} from '@feedstein/api-interfaces';

import { getDB } from '../infra/db';

export class UserRepository implements IUserRepository {
  async insert(data: InsertUserDTO): Promise<IUserSchema> {
    const db = await getDB();
    const result = await db.collection('users').insertOne(data);
    return {
      _id: result.insertedId.toString(),
      ...data,
    };
  }

  async findByEmail(email: string): Promise<IUserSchema> {
    const db = await getDB();
    return db.collection<IUserSchema>('users').findOne({ email });
  }
}

export default new UserRepository();
