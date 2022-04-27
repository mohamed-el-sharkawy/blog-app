import { Router } from 'express';
import { currentuser, signin, signout, signup } from '../controllers/auth';
import { body } from 'express-validator';
import { currentUser, validateRequest } from '@ttiicckkeett/common';

const router = Router();

router.post(
    '/api/users/signup',
    [
        body('email')
            .isEmail()
            .not()
            .isEmpty()
            .withMessage('A valid email must be provided'),
        body('password')
            .trim()
            .isLength({ min: 6, max: 20 })
            .withMessage('Password must be between 6 and 20 characters'),
    ],
    validateRequest,
    signup
);

router.post(
    '/api/users/signin',
    [
        body('email')
            .isEmail()
            .not()
            .isEmpty()
            .withMessage('A valid email must be provided'),
        body('password')
            .trim()
            .isLength({ min: 6, max: 20 })
            .withMessage('Password must be between 6 and 20 characters'),
    ],
    validateRequest,
    signin
);

router.post('/api/users/signout', signout);

router.get('/api/users/currentuser', currentuser);

export { router as AuthRouter };
