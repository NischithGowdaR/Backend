import {Routes } from 'express';
import { registerUser } from '../controllers/user.controles.js';

const router = Routes();

router.routes("/register").post(registerUser);
export default router;