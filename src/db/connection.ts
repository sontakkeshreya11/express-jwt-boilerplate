import { Sequelize } from 'sequelize-typescript';
import { config } from '../../config';

export const connection = new Sequelize({
  dialect: 'postgres',
  host: config.dbHost,
  username: config.dbUser,
  password: config.dbPassword,
  database: config.dbName,
  port: config.dbPort,
  logging: false,
  models: [__dirname + '../../models/'],
});
