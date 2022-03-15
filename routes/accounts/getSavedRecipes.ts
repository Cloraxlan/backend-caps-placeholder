import { Router } from "express";
import { errorMessage } from "../../errorMessage";
import Post from "../../interfaces/Post";
import User from "../../interfaces/User";
import { createAccount } from "../../processes/account/createAccount";
import { getSaved } from "../../processes/account/getSaved";
import { saveRecipe } from "../../processes/account/saveRecipe";
import Session from "../../processes/account/Session";

// /account/login
export default Router().post("/", async (req, res) => {
	let metadata: Post = {
		path: "/account/getSavedRecipes",
		success: true,
	};

	try {
		if (req.body.token) {
			metadata.responce = await getSaved(
				await Session.getEmailFromToken(req.body.token),
			);
		} else {
			throw "No session token given";
		}
	} catch (error) {
		console.log(error);
		errorMessage(metadata, res, error);
	}
	res.json(metadata);
});
