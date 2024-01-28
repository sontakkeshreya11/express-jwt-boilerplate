import dotenv from 'dotenv';
import { Config } from './src/types/config';

dotenv.config({
  path:
    process.env.NODE_ENV === 'production' ? `./env/prod.env` : `./env/dev.env`,
});

export const config: Config = {
  nodeEnv: process.env.NODE_ENV || 'development',
  host: process.env.HOST || 'localhost',
  port: Number(process.env.PORT) || 3000,
  dbName: process.env.DB_NAME || '',
  dbPassword: process.env.DB_PASS || '',
  dbPort: Number(process.env.DB_PORT) || 0,
  dbUser: process.env.DB_USER || '',
  dbHost: process.env.DB_HOST || '',
};
