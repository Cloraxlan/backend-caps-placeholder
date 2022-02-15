import Recipe, {
	serialRecipe,
} from "../../../caps-placeholder/src/Interfaces-Classes/Recipe";
import User from "../../interfaces/User";
import { connection } from "../../processes/mongoConnection";

const DATABASE = "caps-placeholder";
const COLLECTION = "Recipes";
export const add = async (recipe: serialRecipe) => {
	let userConnection = (await connection).db(DATABASE).collection(COLLECTION);
	userConnection.insertOne(recipe);
};
