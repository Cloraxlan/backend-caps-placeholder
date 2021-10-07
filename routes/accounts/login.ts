import { Router } from "express";
import { errorMessage } from "../../errorMessage";
import Post from "../../interfaces/Post";
import User from "../../interfaces/User";
import { createAccount } from "../../processes/account/createAccount";
import Session from "../../processes/account/Session";

// /account/login
export default Router().post("/", async (req, res) => {
	let metadata: Post = {
		path: "/account/login",
		success: true,
	};

	try {
		if (req.body.token) {
			let x = new Session(req.body.token);
			x.updateUser();
		} else {
			throw "No session token given";
		}
	} catch (error) {
		errorMessage(metadata, res, error);
	}
	res.json(metadata);
});
