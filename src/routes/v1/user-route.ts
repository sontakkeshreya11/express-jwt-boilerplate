import express from 'express';
import { createUser } from '../../controller/v1/user-controller';

const userRoutes = express.Router();
userRoutes.route('/').post(createUser);

export default userRoutes;
