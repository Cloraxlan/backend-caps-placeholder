import { Router } from "express";
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
		add(req.body.recipe);
	} catch (error) {
		errorMessage(metadata, res, error);
	}
	res.json(metadata);
});
