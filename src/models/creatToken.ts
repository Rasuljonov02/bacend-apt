import jwt from "jsonwebtoken";
import {Auth} from "../types";

const secretKey = "x-auth-token";

export default function createToken(user: Auth.logIn): string {
    return jwt.sign({email: user.email, password: user.password}, secretKey);
}
