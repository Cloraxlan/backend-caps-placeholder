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
			let email = await authenticateGoogleToken(req.body.token);
			let session: Session = new Session(email);
			metadata.responce = await session.genToken();
		} else {
			throw "No session token given";
		}
	} catch (error) {
		errorMessage(metadata, res, error);
	}
	res.json(metadata);
});
