import User, { RecipeDate } from "../../interfaces/User";
import { connection } from "../mongoConnection";
import { generateToken } from "./Session";

const DATABASE = "caps-placeholder";
const COLLECTION = "Users";
export const getSaved = async (email: string) => {
	let userConnection = (await connection).db(DATABASE).collection(COLLECTION);
	let doc: User | null = (await userConnection.findOne({
		email: email,
	})) as User;
	console.log(doc);
	if (doc) {
		return doc.savedRecipeDates;
	} else {
		throw "Cannot find username";
	}
};
