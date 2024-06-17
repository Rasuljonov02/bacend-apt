import mongoose from "mongoose";

export const connect = () => {
	const dbURL = "mongodb://localhost:27017/Quiz-app";
	mongoose.connect(dbURL).then(() => {
		console.log(`Connected to ${dbURL}...`);
	});
};

