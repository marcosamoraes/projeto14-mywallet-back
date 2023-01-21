import express from 'express';
import cors from 'cors';
import { register, authenticate } from './controllers/AuthController.js';
import { list as listMovements, store as storeMovements } from './controllers/MovementsController.js';
import { auth } from './middlewares/AuthMiddleware.js';

const router = express.Router();

router.use(cors());
router.use(express.json());

router.post('/register', register);
router.post('/authenticate', authenticate);

router.use(auth);

router.get('/movements', listMovements);
router.post('/movements/:type', storeMovements);

export default router;