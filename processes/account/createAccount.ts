import User from "../../interfaces/User";
import { connection } from "../mongoConnection";
import { generateToken } from "./Session";

const DATABASE = "caps-placeholder";
const COLLECTION = "Users";
export const createAccount = async (user: User) => {
	let userConnection = (await connection).db(DATABASE).collection(COLLECTION);
	user.tokens.push(generateToken());
	userConnection.insertOne(user);
};
