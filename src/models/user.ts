import mongoose from 'mongoose';
import { Password } from '../../utils/Password';

interface User {
    email: string;
    password: string;
}
const userSchema = new mongoose.Schema<User>(
    {
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

userSchema.pre('save', async function (done) {
    if (this.isModified('password')) {
        const hashed = await Password.toHash(this.get('password'));
        this.set('password', hashed);
    }
    done();
});

export const User = mongoose.model('user', userSchema);
