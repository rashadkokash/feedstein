import { NextFunction, Request, Response } from 'express';

import { RegisterUserDTO } from '@feedstein/api-interfaces';
import { registerUserSchema } from '@feedstein/validation';

import UserService from '../services/user-service';

export async function registerUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const registerUserDTO: RegisterUserDTO = {
    email: req.body.email,
    password: req.body.password,
  };

  try {
    await registerUserSchema.validate(registerUserDTO);
  } catch {
    return res.status(400).json({
      error: {
        message: 'Invalid data',
      },
    });
  }

  try {
    const isEmailUser = await UserService.isEmailAlreadyUsed(
      registerUserDTO.email
    );
    if (isEmailUser) {
      return res.status(409).json({
        error: {
          message: 'Email is already used',
        },
      });
    }

    const user = await UserService.registerUser(registerUserDTO);
    res.json({
      response: {
        user,
      },
    });
  } catch (e) {
    next(e);
  }
}
