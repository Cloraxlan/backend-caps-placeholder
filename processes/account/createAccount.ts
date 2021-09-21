import User from "../../interfaces/User";
import { connection } from "../mongoConnection";

const DATABASE = "caps-placeholder";
const COLLECTION = "Users";
export const createAccount = async (user: User) => {
	let userConnection = (await connection).db(DATABASE).collection(COLLECTION);
	userConnection.insertOne(user);
};
