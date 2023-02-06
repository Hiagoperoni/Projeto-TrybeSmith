import { sign } from 'jsonwebtoken';

const TOKEN_SECRET = 'secret';

const generateToken = (email: string) => sign(email, TOKEN_SECRET);

export default generateToken;