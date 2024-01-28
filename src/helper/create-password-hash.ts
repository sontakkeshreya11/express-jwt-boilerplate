import bcrypt from 'bcrypt';
import { SALT_ROUNDS } from '../constants/constants';
import { HashOutput } from '../types/types';

export const createPasswordHash = async (
  passwordString: string,
): Promise<HashOutput> => {
  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  const hash = await bcrypt.hash(passwordString, salt);
  return { salt, hash };
};
