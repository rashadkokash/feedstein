import * as Yup from 'yup';

export const registerUserSchema = Yup.object({
  email: Yup.string().email(),
  password: Yup.string().min(6).max(30),
});
