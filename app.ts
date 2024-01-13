import express, { Express } from 'express';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './env/swagger/swagger';

export const app: Express = express();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
