import jwt from "jsonwebtoken";
import {Auth} from "../types";
import {faker} from "@faker-js/faker";

const secretKey = "x-token";

export default function createToken(user: Auth.logIn): string {
    return jwt.sign({email: user.email, password: user.password, id: faker.datatype.uuid()}, secretKey);
}

export function decodeToken(token: string) {
    try {
        const decoded = jwt.verify(token, secretKey) as any;
        const user = {
            email: decoded.email,
            password: decoded.password,
            id: decoded.id
        };
        return user;
    } catch (error) {

        console.error("Tokenni tekshirishda xatolik:", error);
        return null;
    }
}