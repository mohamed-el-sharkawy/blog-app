import { Request, Response } from 'express';
import { User } from '../models/user';
import jwt from 'jsonwebtoken';
import { Password } from '../../utils/Password';

const signup = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
        return res.status(400).send('Email is in use');
    }

    const user = new User({ email, password });
    await user.save();

    const userJWT = jwt.sign(
        {
            id: user.id,
            email: user.email,
        },
        process.env.JWT_KEY!
    );

    req.session = {
        jwt: userJWT,
    };

    res.status(201).send(user);
};

const signin = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        return res.status(400).send('There no user with this email');
    }

    const passwordMatch = await Password.compare(user.password, password);
    if (!passwordMatch) {
        return res.status(400).send('Invalid email or password');
    }

    const userJWT = jwt.sign(
        {
            id: user.id,
            email: user.email,
        },
        process.env.JWT_KEY!
    );

    req.session = {
        jwt: userJWT,
    };

    res.status(201).send(user);
};

const signout = (req: Request, res: Response) => {
    req.session = null;
    res.send();
};

const currentuser = (req: Request, res: Response) => {
    if (!req.session?.jwt) {
        return res.send({ currentUser: null });
    }
    try {
        const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY!);
        return res.send({ currentuser: payload });
    } catch (error) {
        return res.send({ currentUser: null });
    }
};

export { signup, signin, signout, currentuser };
