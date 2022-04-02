import { useMutation } from 'react-query';

import { ActivateEmailDTO, RegisterUserDTO } from '@feedstein/api-interfaces';

import baseAPI from './base-api';

export function registerUser(data: RegisterUserDTO) {
  return baseAPI.post('/auth/register', data);
}

export function useRegisterUser() {
  return useMutation<unknown, unknown, RegisterUserDTO>(registerUser);
}

export function activateEmail(data: ActivateEmailDTO) {
  return baseAPI.post('/auth/activate', data);
}

export function useActivateEmail() {
  return useMutation<unknown, unknown, ActivateEmailDTO>(activateEmail);
}
