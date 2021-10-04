import Post from "./interfaces/Post";
import { Response } from "express";
import Get from "./interfaces/Get";
export const errorMessage = (
	metadata: Post | Get,
	res: Response,
	message: any = "An error has occured at " + metadata.path,
	code: number = 500,
) => {
	metadata.success = false;
	metadata.responce = message;
	res.statusCode = code;
	res.json(metadata);
};
