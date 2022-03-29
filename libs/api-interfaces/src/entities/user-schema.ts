export interface IUserSchema {
  _id: string;
  email: string;
  password: string;
  active: boolean;
  activationToken?: string;
  activationTokenExpiresAt?: Date;
}
