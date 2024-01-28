import express, { Express } from 'express';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from '../env/swagger/swagger';
import User from './models/user';

export const app: Express = express();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.post('/user', async (req, res) => {
  const { body } = req;
  await User.create({
    first_name: body.name,
    last_name: body.name,
    email: body.email,
    password_id: '2',
  });
  res.json({
    Status: 'Success',
    Message: 'Created User Successfully',
  });
});
