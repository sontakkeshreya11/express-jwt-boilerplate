import { app } from './app';
import { config } from '../config';
import { logger } from './logger/logger';
import { connection } from './db/connection';

const startServer = async () => {
  try {
    await connection.sync({ alter: true });
    logger.info('Connected To database Succesfully');

    app.listen(config.port, () => {
      logger.info(`on env ${config.nodeEnv}`);
      logger.info(`server started on port: ${config.port}`);
    });
  } catch (e) {
    logger.error(e);
    throw new Error('Connecting to database Failed');
  }
};

startServer();
