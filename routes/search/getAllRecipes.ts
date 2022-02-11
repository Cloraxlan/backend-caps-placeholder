import { Router } from "express";
import { findAll } from "../../processes/search/find";

export default Router().get("/", async (req, res) => {
	res.json(await findAll());
});
