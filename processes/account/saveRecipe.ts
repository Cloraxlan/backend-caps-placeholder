import User, { RecipeDate } from "../../interfaces/User";
import { connection } from "../mongoConnection";
import { generateToken } from "./Session";

const DATABASE = "caps-placeholder";
const COLLECTION = "Users";
export const saveRecipe = async (email: string, recipe: RecipeDate) => {
	let userConnection = (await connection).db(DATABASE).collection(COLLECTION);
	let doc: User | null = (await userConnection.findOne({
		email: email,
	})) as User;
	console.log(email);
	if (doc) {
		doc.savedRecipeDates.push(recipe);
		userConnection.replaceOne({ email: email }, doc);
	} else {
		throw "Cannot find username";
	}
};
