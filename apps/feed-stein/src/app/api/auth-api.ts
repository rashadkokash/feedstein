import { useMutation } from 'react-query';

import { RegisterUserDTO } from '@feedstein/api-interfaces';

import baseAPI from './base-api';

export function registerUser(data: RegisterUserDTO) {
  return baseAPI.post('/auth/register', data);
}

export function useRegisterUser() {
  return useMutation<unknown, unknown, RegisterUserDTO>(registerUser);
}
