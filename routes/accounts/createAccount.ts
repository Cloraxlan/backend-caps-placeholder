import { Router } from "express";
import { errorMessage } from "../../errorMessage";
import Post from "../../interfaces/Post";
import User from "../../interfaces/User";
import { createAccount } from "../../processes/account/createAccount";

// /account/createAccount
export default Router().post("/", async (req, res) => {
	let metadata: Post = {
		path: "/account/createAccount",
		success: true,
	};
	let user: User | null = null;
	try {
		if (req.body.email && req.body.name) {
			user = {
				email: req.body.email,
				name: req.body.name,
				tokens: [],
			};
		} else {
			throw "Invalid Parameters for Create User";
		}
		createAccount(user);
	} catch (error) {
		errorMessage(metadata, res, error);
	}
	res.json(metadata);
});
