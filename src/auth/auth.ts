import mongoose from "mongoose";
import { Auth } from "./types";


const AuthSchema = new mongoose.Schema<Auth.logIn>({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

export const login = mongoose.model<Auth.logIn>("login", AuthSchema);
