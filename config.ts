import dotenv from 'dotenv';
import { Config } from './types/config';

dotenv.config({
  path:
    process.env.NODE_ENV === 'production' ? `./env/prod.env` : `./env/dev.env`,
});

export const config: Config = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  HOST: process.env.HOST || 'localhost',
  PORT: Number(process.env.PORT) || 3000,
};
