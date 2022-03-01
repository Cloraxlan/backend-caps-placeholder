import { Router } from "express";
import { errorMessage } from "../../errorMessage";
import Post from "../../interfaces/Post";
import User from "../../interfaces/User";
import { createAccount } from "../../processes/account/createAccount";
import { saveRecipe } from "../../processes/account/saveRecipe";
import Session from "../../processes/account/Session";

// /account/login
export default Router().post("/", async (req, res) => {
	let metadata: Post = {
		path: "/account/saveRecipe",
		success: true,
	};

	try {
		if (req.body.token) {
			let x = new Session(req.body.token);
			let user = await x.updateUser();
			console.log(user.name);
			if (req.body.recipe) {
				saveRecipe(user.email, req.body.recipe);
			} else {
				throw "No recipeDate given";
			}
		} else {
			throw "No session token given";
		}
	} catch (error) {
		errorMessage(metadata, res, error);
	}
	res.json(metadata);
});
