import { MongoClient } from "mongodb";
require("dotenv").config();

//Gets uri from .env file
const uri = process.env.MONGO_URI;
if (uri === undefined) {
	throw "uri not found for mongodb";
}
const client = new MongoClient(uri);

//Connects to mongo server
export const connection: Promise<MongoClient> = client
	.connect()
	.then((client) => {
		return client;
	});
