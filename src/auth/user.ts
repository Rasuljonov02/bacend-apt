import mongoose from "mongoose";
import {Auth} from "./types";
const UserSchema = new mongoose.Schema<Auth.Register>({
	name: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		unique: true,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
});
export const User = mongoose.model<Auth.Register>("User", UserSchema);
