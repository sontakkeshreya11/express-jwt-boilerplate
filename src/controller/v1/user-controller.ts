import { createPasswordHash } from '../../helper/create-password-hash';
import Password from '../../models/password';
import User from '../../models/user';
import { Request, Response } from 'express';
import { createUserInput } from '../../types/types';

export const createUser = async (
  req: Request<never, never, createUserInput, never, never>,
  res: Response,
) => {
  const { first_name, last_name, password, email } = req.body;

  const passWordHash = await createPasswordHash(password);
  const userPassword = await Password.create({
    hash: passWordHash.hash,
    salt: passWordHash.salt,
  });

  await User.create({
    first_name: first_name,
    last_name: last_name,
    email: email,
    password_id: userPassword.id,
  });

  res.json({
    Status: 'Success',
    Message: 'Created User Successfully',
  });
};
