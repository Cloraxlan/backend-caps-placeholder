import { Router } from "express";
import { serialRecipe } from "../../../caps-placeholder/src/Interfaces-Classes/Recipe";
import { errorMessage } from "../../errorMessage";
import Post from "../../interfaces/Post";
import { add } from "../../processes/search/add";
import { findAll } from "../../processes/search/find";

export default Router().post("/", async (req, res) => {
	let metadata: Post = {
		path: "/search/add",
		success: true,
	};
	console.log(req.body);
	try {
		await add(JSON.parse(req.body.recipe) as serialRecipe);
		res.json(metadata);
	} catch (error) {
		errorMessage(metadata, res, error);
	}
});
