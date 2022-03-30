import { Router } from 'express';

import * as authController from '../../controllers/auth-controller';

const router = Router();

router.post('/register', authController.registerUser);
router.post('/activate', authController.activateEmail);

export default router;
