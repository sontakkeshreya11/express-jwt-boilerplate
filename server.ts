import { app } from './app';
import { config } from './config';
import { logger } from './logger/logger';

app.listen(config.PORT, () => {
  logger.info(`on env ${config.NODE_ENV}`);
  logger.info(`server started on port: ${config.PORT}`);
});

console.log('as');
