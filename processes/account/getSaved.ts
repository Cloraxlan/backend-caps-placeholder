import User, { RecipeDate } from "../../interfaces/User";
import { connection } from "../mongoConnection";
import { generateToken } from "./Session";

const DATABASE = "caps-placeholder";
const COLLECTION = "Users";
export const getSaved = async (email: string): Promise<RecipeDate[]> => {
	let userConnection = (await connection).db(DATABASE).collection(COLLECTION);
	let doc: User | null = (await userConnection.findOne({
		email: email,
	})) as User;
	if (doc) {
		return doc.savedRecipeDates;
	} else {
		throw "Cannot find username";
	}
};
