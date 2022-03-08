import { Router } from "express";
import { errorMessage } from "../../errorMessage";
import Post from "../../interfaces/Post";
import User from "../../interfaces/User";
import { authenticateGoogleToken } from "../../processes/account/authenticateGoogleToken";
import { createAccount } from "../../processes/account/createAccount";
import Session from "../../processes/account/Session";

// /account/login
export default Router().post("/", async (req, res) => {
	let metadata: Post = {
		path: "/account/login",
		success: true,
	};

	try {
		//Google auth token
		if (req.body.token) {
			authenticateGoogleToken(req.body.token);
		} else {
			throw "No session token given";
		}
	} catch (error) {
		errorMessage(metadata, res, error);
	}
	res.json(metadata);
});
